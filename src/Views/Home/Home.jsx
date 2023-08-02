import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import { getGames } from "../../Redux/Slice/sliceGames";
import routes from "../../constants/routes";
import Button from "../../components/button";
import Carousel from "../../components/carousel";
import GamesCards from "../../components/gamesCards";
import SerchBar from "../../components/searchBar";

import * as S from "./Home.styles";

const Home = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);

  const gamesStore = useSelector((state) => state.gamesSlice.games);

  const apiUrl = "http://localhost:3001/Home";

  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      dispatch(getGames(response.data));
    });
  }, []);

  const buttonNext = (e) => {
e.preventDefault()
    setCurrentIndex((prevIndex) => (prevIndex + 1) % gamesStore.length);
  };
  const buttonPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + gamesStore.length) % gamesStore.length
    );
  };

  return (
    <S.Container>
      <S.NavBarContainer>
        <S.NavBarButtons>
          <Button
            onClick={() => {
              navigate(routes.SHOP);
            }}
          >
            Tienda
          </Button>
          <Button>Categorias</Button>
          <Button>Acerca de</Button>
          <Button
            onClick={() => {
              navigate(routes.NEWS);
            }}
          >
            Noticias
          </Button>
        </S.NavBarButtons>
        <S.RegisterButtons>
          <button
            onClick={() => {
              navigate(routes.SingUp);
            }}
          >
            Registrarse
          </button>
          <button
            onClick={() => {
              navigate(routes.LogIn);
            }}
          >
            Iniciar Sesion
          </button>
        </S.RegisterButtons>
      </S.NavBarContainer>
      <S.SerchBarContainer>
        <SerchBar />
      </S.SerchBarContainer>
      <S.CarouselContainer>
        <Button onClick={buttonPrev}>{"<"}</Button>
        <S.Carousel>
          <S.Title>Destacados Y Recomendados</S.Title>
          {gamesStore.map((game, index) => {
            return (
              <Carousel
                key={game.id}
                currentIndex={currentIndex}
                name={game.name}
                img={game.large_capsule_image}
                index={index}
                discountPercent={game.discount_percent}
                discounted={game.discounted}
                price={game.original_price}
                priceDiscount={game.final_price}
                currency={game.currency}
              />
            );
          })}
        </S.Carousel>

        <Button onClick={buttonNext}>{">"}</Button>
      </S.CarouselContainer>
      <GamesCards />
    </S.Container>
  );
};
export default Home;
