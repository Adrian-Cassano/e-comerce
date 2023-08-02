import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(14, 0, 84);
  display: flex;
  justify-content: center;
  width: 50rem;
  box-shadow: 5px 5px 5px black;
`;
export const CarouselContainer = styled.div`
  display: flex;
`;
export const InfoContainer = styled.div`
  background-color: red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`;
export const Name = styled.div`
  background-color: red;
`;
export const PriceContainer = styled.div`
  background-color: gray;
  display: flex;
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
color: #68ff00 ;
`

