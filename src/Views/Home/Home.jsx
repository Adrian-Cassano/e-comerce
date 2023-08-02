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

var indexPage = 0;

const Home = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const gamesStore = useSelector((state) => state.gamesSlice.games);

  const images = gamesStore[0]?.large_capsule_image;

  const apiUrl = "http://localhost:3001/Home";

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images);

  useEffect(() => {
    axios.get(apiUrl).then((response) => {
      dispatch(getGames(response.data));
    });
  }, []);

  const buttonPrev = () => {};

  const buttonNext = () => {};

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
        {indexPage !== 0 && <Button onClick={buttonPrev}>{"<"}</Button>}

        <S.Carousel>
          {gamesStore.map((game, index) => {
            return (
              <Carousel
                key={game.id}
                name={game.name}
                img={game.large_capsule_image}
                indexPage={indexPage}
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
