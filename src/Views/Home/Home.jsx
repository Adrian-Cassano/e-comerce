import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import routes from "../../constants/routes";
import Button from "../../components/button";
import Carousel from "../../components/carousel";
import GamesCards from "../../components/gamesCards";
import SerchBar from "../../components/searchBar";
import ModalCategory from "../../components/Modal/ModalCategory";

import * as S from "./Home.styles";
import CATEGORYS from "../../Arrays/ModalCategoryArray";

const Home = () => {
  const [ModalCategoryOpen, setModalCategoryOpen] = useState(false);

  const navigate = useNavigate();

  const toggleModalCategory = () => {
    setModalCategoryOpen(!ModalCategoryOpen);
  };

  return (
    <S.Container>
      <S.NavBarContainer>
        <Button
          onClick={() => {
            navigate(routes.SHOP);
          }}
        >
          Tienda
        </Button>
        <S.ModalContainer>
          <Button onClick={toggleModalCategory}>Categorias</Button>
          {ModalCategoryOpen ? (
            <>
              {CATEGORYS.map((category) => {
                return <ModalCategory>{category.option}</ModalCategory>;
              })}
            </>
          ) : null}
        </S.ModalContainer>
        <Button>Acerca de</Button>
        <Button
          onClick={() => {
            navigate(routes.NEWS);
          }}
        >
          Noticias
        </Button>
      </S.NavBarContainer>
      <S.SerchBarContainer>
        <SerchBar />
      </S.SerchBarContainer>
      <S.CarouselContainer>
        <Carousel />
      </S.CarouselContainer>
      <GamesCards />
      <S.CarouselContainer>
        <Carousel />
      </S.CarouselContainer>
    </S.Container>
  );
};
export default Home;
