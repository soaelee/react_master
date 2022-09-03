import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getMovies } from "../apis/api";
import { IGetMoviesResp } from "../apis/types";
import { makeImagePath } from "../utils/common";

const Wrapper = styled.div``;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div<{ bgPhoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  font-size: 36px;
  width: 50%;
`;

const Slider = styled.div`
  position: relative;
  top: -150px;
`;

const Row = styled(motion.div)`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  position: absolute;
  width: 100%;
`;

const Movie = styled(motion.div)<{ bgPhoto: string }>`
  background-color: white;
  height: 200px;
  font-size: 66px;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.div)`
  padding: 20px;
  background-color: ${(props) => props.theme.black.lighter};
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  h4 {
    text-align: center;
    font-size: 10px;
  }
`;

const rowVariants = {
  hidden: {
    x: window.outerWidth + 5,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 5,
  },
};

const movieVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    y: -30,
    scale: 1.3,
    transition: { delay: 0.4, duration: 0.2 },
  },
};

// 나머지는 parent에게 상속
const infoVariants = {
  hover: {
    opacity: 1,
    transition: { delay: 0.4, duration: 0.2 },
  },
};

const offset = 6;
function Home() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const { data, isLoading } = useQuery<IGetMoviesResp>(
    ["movies", "nowPlaying"],
    getMovies
  );
  const incraseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading</Loader>
      ) : (
        <>
          <Banner
            onClick={incraseIndex}
            bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}
          >
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <Slider>
            {/* dom이 구현되고 사라질때 애니메이션 적용 */}
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                key={index}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 1.5 }}
              >
                {data?.results
                  .slice(1)
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <Movie
                      variants={movieVariants}
                      key={movie.id}
                      bgPhoto={makeImagePath(movie.backdrop_path, "w500")}
                      initial="normal"
                      whileHover="hover"
                      transition={{ type: "tween" }}
                    >
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Movie>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Wrapper>
  );
}
export default Home;
