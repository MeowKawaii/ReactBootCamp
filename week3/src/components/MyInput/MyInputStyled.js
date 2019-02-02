import styled from "styled-components";

const MyInputStyled = styled.input`
  padding: 10px;
  margin: 10px;
  border: 1px solid blue;
  border-radius: 4px;
  width: 100%;
`;

const MyInputWrapper = styled.div`
  position: relative;
`;

const ClearButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  button: 0;
`;

export { MyInputStyled, MyInputWrapper, ClearButton };