import React from "react";
import * as S from "./Carousel.styles";

const Carousel = ({
  name,
  index,
  img,
  discountPercent,
  price,
  priceDiscount,
  currency,
  discounted,
  currentIndex,
}) => {
  const formatPesoArgentino = (number) => {
    const numericValue =
      typeof number === "string" ? parseFloat(number) : number;

    const cents = numericValue / 100;

    const formattedCents = cents.toLocaleString("es-AR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return `${currency} $ ${formattedCents}`;
  };

  return (
    <S.Container>
      {index === currentIndex && (
        <S.CarouselContainer>
          <S.ImgContainer>
            <img src={img} alt="game"></img>
          </S.ImgContainer>
          <S.InfoContainer>
            <S.Name>{name}</S.Name>
            <S.PriceContainer>
              {discounted === true && (
                <>
                  <S.Discount> -{discountPercent}%</S.Discount>
                  <S.PriceDiscount>
                    {formatPesoArgentino(price)}
                  </S.PriceDiscount>
                  <S.DiscountPrice>
                    {formatPesoArgentino(priceDiscount)}
                  </S.DiscountPrice>
                </>
              )}
              {discounted === false && price !== null && (
                <>
                  <S.Price> {formatPesoArgentino(price)}</S.Price>
                </>
              )}
              {price === null && (
                <>
                  <S.Price> GRATUITO</S.Price>
                </>
              )}
            </S.PriceContainer>
          </S.InfoContainer>
        </S.CarouselContainer>
      )}
    </S.Container>
  );
};

export default Carousel;
