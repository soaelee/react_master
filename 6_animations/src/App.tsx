import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useEffect, useRef } from "react";

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const x = useMotionValue(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rotateZ = useTransform(x, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    x,
    [-800, 800],
    [
      "linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))",
      "linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0))",
    ]
  );
  const { scrollYProgress } = useViewportScroll(); //  0 ~ 1
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  /*
  useTransform 훅을 통해 MotionValues를 연결합니다.
  useTransform()는 한 값 범위에서 다른 값 범위로 매핑하여 다른 MotionValue의 output을 변환하는 MotionValue를 만듭니다.
  x(Motion Value)값을 다른 output값으로 변환해준다.
   * x = -800 : 2
   * x = 0 : 1
   * x = 800 : 0
   */
  useEffect(() => {
    scrollYProgress.onChange(() => {
      console.log(scrollYProgress.get());
    });
  }, [scrollYProgress]);
  return (
    <Wrapper ref={wrapperRef} style={{ background: gradient }}>
      {/* <button onClick={() => x.set(200)}>Click Me</button> */}
      <Box
        style={{ x, rotateZ, scale }}
        drag="x"
        dragConstraints={wrapperRef}
        dragSnapToOrigin
      />
    </Wrapper>
  );
}

export default App;
