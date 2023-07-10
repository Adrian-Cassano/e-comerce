import React from "react";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

import Button from "../../components/button";
import Carousel  from "../../components/carousel";
import GamesCards from "../../components/gamesCards"

import * as S from "./Home.styles";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";

const Home = () => {

  const navigate = useNavigate()
  return (
    <S.Container>
      <S.NavBarContainer>
        <Button onClick={()=> {navigate(routes.SHOP)}}>Tienda</Button>
        <Button>Categorias</Button>
        <Button>Acerca de</Button>
        <Button>Noticias</Button>
      </S.NavBarContainer>
      <S.SerchBarContainer>
        <Stack spacing={2} sx={{ width: 300 }}>
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            // options={top100Films.map((option) => option.title)}
            renderInput={(params) => <TextField {...params} label="Buscar" />}
          />
        </Stack>
      </S.SerchBarContainer>
      <S.CarouselContainer>
      <Carousel/>
      </S.CarouselContainer>
      <GamesCards/>
      <S.CarouselContainer>
      <Carousel/>
      </S.CarouselContainer>
    </S.Container>
  );
};
export default Home;
