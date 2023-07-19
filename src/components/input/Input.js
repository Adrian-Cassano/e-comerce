import * as S from "./Input.styles";

const Input = (props) => {
  const { children, background, fontSize } = props;
  return (
    <S.StyledInput background={background} fontSize={fontSize}>
      {children}
    </S.StyledInput>
  );
};
export default Input;
