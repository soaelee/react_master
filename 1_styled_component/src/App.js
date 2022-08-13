import styled from "styled-components";

const Father = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

// props로 설정 가능한 컴포넌트 (Adapting)
const Box = styled.div`
  background-color: ${(props) => props.bgColor ?? "teal"};
  width: 100px;
  height: 100px;
`;

// 다른 컴포넌트를 확장하는 컴포넌트 (Extending)
const Circle = styled(Box)`
  border-radius: 50%;
`;

const Button = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

/* 컴포넌트의 속성 설정 */
const Input = styled.input.attrs({ required: true, minLength: 10 })`
  background-color: lightpink;
`;
const App = () => {
  return (
    <>
      <Father>
        <Box />
        <Box bgColor="tomato" />
        <Circle />
      </Father>
      <Father>
        <Button>LogInButton</Button>
        {/* as: 다른 태그로 컴포넌트를 사용하고 싶을 때 */}
        <Button as="a" href="/">
          LinkButton
        </Button>
      </Father>
      <Father as="header">
        {/* 컴포넌트의 속성 설정 */}
        <Input maxLength="15" />
        <Input />
        <Input />
        <Input />
        <Input />
      </Father>
    </>
  );
};

export default App;
