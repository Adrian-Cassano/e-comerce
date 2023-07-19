import * as S from "./ModalCategory.styles"
const ModalCategory = (props) =>{
    const {children,} = props
    return(
        <S.Container>
            <div>
            {children}
            </div>
        </S.Container>
    )
}
export default ModalCategory;