import * as S from "./Landing.styles";
import Input from "../../components/input";
import Button from "../../components/button/Button";

const Landing = () => {
  const fomSubmit = (e) =>{
    e.preventDefault()
    const usuarioDesc = e.target[0].value
    const usuario = {usuarioDesc: usuarioDesc};
    let transactionJson = JSON.stringify(usuario)
    fetch('http://localhost:3000/Landing',{
      method: 'post',
      body: transactionJson
    })
  }
  return (
    <S.Container>
      <S.Title>REGISTRASE</S.Title>
      <S.RegisterContainer >
        <S.InputContainer>
        <form onSubmit={fomSubmit}>
          <input id="usuario"/>
          <button>Ingresar</button>
         </form>
          {/* Usuario <Input />
          Email <Input />
          Contraseña <Input /> */}
        </S.InputContainer>
        <S.InputContainer>
         
        </S.InputContainer>
      </S.RegisterContainer>
     
      {/* <form>
          <input>Apellido</input>
          <input>Edad</input>
          <input>Contraseña</input>
          
         </form> */}
         
          {/* Apellido <Input />
          Edad <Input />
          Contraseña <Input /> */}
    </S.Container>
    
  );
};

export default Landing;
