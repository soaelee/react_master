import styled from "styled-components";

interface IContainer {
  bgColor: string;
}

const Container = styled.div<IContainer>`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background-color: ${(props) => props.bgColor};
`;

interface ICircle {
  bgColor?: string;
}
const Circle = (props: ICircle) => {
  const { bgColor = "teal" } = props;
  return <Container bgColor={bgColor} />;
};

export default Circle;
