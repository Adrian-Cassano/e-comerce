import * as S from "./GamesCards.styles";

import Doom from "../../Img/DOOM.jpg"

const GamesCards = () =>{
    return(
        <S.Container>
            <S.ImgContainers>
           <img src={Doom} alt="Games"/>
           <img src={Doom} alt="Games"/>
           <img src={Doom} alt="Games"/>
           <img src={Doom} alt="Games"/>
           </S.ImgContainers>
        </S.Container>
    )
}
export default GamesCards