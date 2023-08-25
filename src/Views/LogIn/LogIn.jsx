import { useNavigate } from "react-router-dom";
import axios from "axios";

import Input from "../../components/input";


import * as S from "./LogIn.styles";

const LogIn = () => {
  const url = "http://localhost:3001/LogIn";
  const navigate = useNavigate()
  const fomSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[2].value;
    axios.get(url).then((response)=>{
      response.data.forEach((usuario)=>{
        if(email === ""){
          alert("Ingresa un email")
        }else if(password === ""){
          alert("Ingresa una contraseña")
        }else if(email !== usuario.email && password !== usuario.password ){
          alert("Email o contraseña no son validos")
        }else if(email === usuario.email && password === usuario.password){
          navigate("/")
        }
        else{
         
          // console.log("paso en front")
          // const informacionUsuario = {
          //   email: email,
          //   password: password,
          // };
          // const ususarioJson = JSON.stringify(informacionUsuario);
          // fetch(url, {
          //   method: "post",
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          //   body: ususarioJson,
          // });
         
        }
      })
    
   
  })
  
  };
  return (
    <S.Container>
      <S.Title>INICIAR SESION</S.Title>
      <S.RegisterContainer>
        <form onSubmit={fomSubmit}>
          <S.InputContainer>
            Email <Input />
            Contraseña <Input type="password" />
          </S.InputContainer>
          <S.ContainerButton>
          <button >Ingresar</button>
          </S.ContainerButton>
         
        </form>
      </S.RegisterContainer>
    </S.Container>
  );
};

export default LogIn;
