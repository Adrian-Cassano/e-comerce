import Input from "../../components/input";

import * as S from "./Register.styles";

const Register = () => {
  const url = "http://localhost:3001/Register";
  const fomSubmit = (e) => {
    e.preventDefault();
   
    const user = e.target[0].value;
    const email = e.target[2].value;
    const password = e.target[4].value;
    const lastname = e.target[6].value;
    const age = e.target[8].value;
    const informacionUsuario = {
      user: user,
      email: email,
      password: password,
      lastname: lastname,
      age: age,
    };
    const ususarioJson = JSON.stringify(informacionUsuario);
    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: ususarioJson,
     
    });
  
   
  };
  return (
    <S.Container>
      <S.Title>REGISTRARSE</S.Title>
      <S.RegisterContainer>
        <form onSubmit={fomSubmit}>
          <S.InputContainer>
            Nombre <Input />
            Email <Input />
            Contraseña <Input type="password" />
            Apellido <Input />
            Edad
            <Input />
          </S.InputContainer>
          <S.ContainerButton>
          <button >Ingresar</button>
          </S.ContainerButton>
        </form>
      </S.RegisterContainer>
    </S.Container>
  );
};

export default Register;
