import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import { getGames } from "../../Redux/Slice/sliceGames";

import Button from "../../components/button";
import Carousel from "../../components/carousel";
import GamesCards from "../../components/gamesCards";
import List from "../../components/list";
import SecondCarousel from "../../components/secondCarousel";

import routes from "../../constants/routes";
import banner from "../../Img/image.png";

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
    e.preventDefault();
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
          <Button>Tienda</Button>
          <Button>Categorias</Button>
          <Button>Acerca de</Button>
          <Button>Noticias</Button>
        </S.NavBarButtons>
        <S.RegisterButtons>
          <S.ButtonLog
            onClick={() => {
              navigate(routes.SingUp);
            }}
          >
            Registrarse
          </S.ButtonLog>
          <S.ButtonLog
            onClick={() => {
              navigate(routes.LogIn);
            }}
          >
            Iniciar Sesion
          </S.ButtonLog>
        </S.RegisterButtons>
      </S.NavBarContainer>
      <S.CarouselContainer>
        <List />
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
      <S.BannerContainer>
        <S.Banner>
          <img src={banner} alt="Banner"></img>
        </S.Banner>
      </S.BannerContainer>
      <S.SecondCarouselContainer>
        <S.SecondCarousel>
          {gamesStore.map((game, index) => {
            return (
              <SecondCarousel
                key={game.id}
                name={game.name}
                img={game.small_capsule_image}
                index={index}
                discountPercent={game.discount_percent}
                discounted={game.discounted}
                price={game.original_price}
                priceDiscount={game.final_price}
                currency={game.currency}
              />
            );
          })}
        </S.SecondCarousel>
      </S.SecondCarouselContainer>
      <S.CardsContainer>
        <S.Title>Juegos</S.Title>
        <S.Cards>
          {gamesStore.map((game) => {
            return <GamesCards key={game.id} img={game.small_capsule_image} />;
          })}
        </S.Cards>
      </S.CardsContainer>
    </S.Container>
  );
};
export default Home;
