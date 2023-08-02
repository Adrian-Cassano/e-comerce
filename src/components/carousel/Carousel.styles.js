import styled from "styled-components";

export const Container = styled.div`
  background-color: #0b0044;
  display: flex;
  width: 60rem;
  box-shadow: 5px 5px 5px black;
  color: white;
`;
export const CarouselContainer = styled.div`
  display: flex;
`;
export const ImgContainer = styled.div`
  box-shadow: 15px 5px 20px black;
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`;
export const Name = styled.div`
font-size:30px
`;
export const PriceContainer = styled.div`
  background-color: gray;
  display: flex;
  margin-bottom: 10px;
`;
export const Discount = styled.div`
  background-color: green;
  color: #68ff00;
`;

export const PriceDiscount = styled.div`
  color: #d9d9d9;
  text-decoration: line-through;
  margin-left: 5px;
  margin-right: 5px;
`;

export const Price = styled.div`
  margin-left: 5px;
  margin-right: 5px;
`;
export const DiscountPrice = styled.div`
  color: #68ff00;
`;
