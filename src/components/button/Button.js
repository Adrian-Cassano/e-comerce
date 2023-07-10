import * as S from "./Button.styles";

const Button = (props) => {

  const { children, background, fontSize, variant, onClick } = props;
  return (
    <S.StyledButton
      background={background}
      fontSize={fontSize}
      $variant={variant}
      onClick={onClick}
     
    >
        {children}
    </S.StyledButton>
  );
};

export default Button;
