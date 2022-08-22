import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { isDarkAtom } from "../atoms";

const Button = styled.div`
  background: "transparent";
  padding: 10px 20px;
  margin-left: 10px;
  position: fixed;
  top: 20px;
  left: 20px;
  color: ${(props) => props.theme.textColor};
  font-weight: 600;
`;
const ToggleMode = () => {
  const setterFn = useSetRecoilState(isDarkAtom);
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <Button onClick={() => setterFn((prev) => !prev)}>
      {isDark ? "Light" : "Dark"} Mode
    </Button>
  );
};

export default ToggleMode;
