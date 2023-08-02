import * as S from "./Input.styles";

const Input = (props) => {
  const { children, background, fontSize, type, color} = props;
  return (
    <S.StyledInput color={color} type={type} background={background} fontSize={fontSize}>
      {children}
    </S.StyledInput>
  );
};
export default Input;
