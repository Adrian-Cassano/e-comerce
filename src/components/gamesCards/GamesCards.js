import * as S from "./GamesCards.styles";


const GamesCards = ({img}) =>{
    return(
        <S.Container>
            
           <img src={img} alt="Games"/>
           
        </S.Container>
    )
}
export default GamesCards