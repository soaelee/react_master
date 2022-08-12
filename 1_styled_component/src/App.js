import styled from "styled-components";

const Father = styled.div`
  display: "flex";
`;

const Box = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;

const Text = styled.span`
  color: white;
`;

const App = () => {
  return (
    <Father>
      <Box>
        <Text>Hello</Text>
      </Box>
      <Box>
        <Text>Hello</Text>
      </Box>
    </Father>
  );
};

export default App;
