import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  background: linear-gradient(to top, #0e0054 50%, transparent);
  color: white;
`;
export const NavBarContainer = styled.div`
  width: 100vw;
  background: linear-gradient(#0b0044 80%, #1c00a9);
  display: flex;
  justify-content: center;
`;
export const NavBarButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RegisterButtons = styled.div`
  display: flex;
  height: 40px;
`;
export const ButtonLog = styled.div`
  text-decoration: none;
  margin: 10px;
  color: #a2a2a2;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;
export const Title = styled.div`
  font-size: 25px;
`;
export const CarouselContainer = styled.div`
  display: flex;
  margin-top: 5rem;
  justify-content: center;
  align-items: center;
`;
export const Carousel = styled.div``;
export const SecondCarouselContainer = styled.div`
 display: flex;
 justify-content: center;
`;
export const SecondCarousel = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 60rem;
`;
export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const Banner = styled.div`
  cursor: pointer;
  &:hover {
    box-shadow: 1px 1px 30px skyblue;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20rem;
`;
export const Cards = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 65rem;
`;
