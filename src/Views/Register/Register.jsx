import { useNavigate } from "react-router-dom";

import Input from "../../components/input";

import * as S from "./Register.styles";

const Register = () => {
  const url = "http://localhost:3001/Register";
  const navigate = useNavigate();
  const fomSubmit = (e) => {
    e.preventDefault();

    const user = e.target[0].value;
    const email = e.target[2].value;
    const password = e.target[4].value;
    if (user === "" && email === "" && password === "") {
      alert("Complete el formulario ");
    } else {
      const informacionUsuario = {
        user: user,
        email: email,
        password: password,
      };
      navigate("/");
      const ususarioJson = JSON.stringify(informacionUsuario);
      fetch(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: ususarioJson,
      });
    }
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
          </S.InputContainer>
          <S.ContainerButton>
            <button>Ingresar</button>
          </S.ContainerButton>
        </form>
      </S.RegisterContainer>
    </S.Container>
  );
};

export default Register;
