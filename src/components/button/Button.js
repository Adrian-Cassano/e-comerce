import PropTypes from 'prop-types'; 

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

Button.propTypes ={
  background : PropTypes.string,
  fontSize: PropTypes.string,
  children: PropTypes.string,
  onClick:PropTypes.func
}

export default Button;
 