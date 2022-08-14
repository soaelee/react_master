import styled, { keyframes } from "styled-components";

const Father = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 10px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 10px;
  }
`;

const notRotation = keyframes`
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const Emoji = styled.span`
  cursor: pointer;
  animation: ${notRotation} 1.5s linear infinite;
  font-size: 36px;
`;

const Box = styled.div`
  background-color: ${(props) => props.bgColor ?? "tomato"};
  width: 100px;
  height: 100px;
  animation: ${rotation} 1.5s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji}:hover {
    font-size: 45px;
  }
  ${Emoji}:active {
    opacity: 0.5;
  }
`;

const App = () => {
  return (
    <>
      <Father>
        <Box>
          <Emoji as="p">😊</Emoji>
        </Box>
      </Father>
    </>
  );
};

export default App;
