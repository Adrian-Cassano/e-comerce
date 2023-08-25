import * as S from "./List.styles"
const List = () => {
  return (
    <S.Container>
      <S.ListContainer>
        <S.Title> recomendados</S.Title>
        <S.Option>amigos</S.Option>
        <S.Option>mentores</S.Option>
        <S.Option>etiquetas</S.Option>
      </S.ListContainer>
      <S.ListContainer>
        <S.Title> explorar por categorias</S.Title>
        <S.Option>lo mas vendido</S.Option>
        <S.Option>Novedades</S.Option>
        <S.Option>Proxiamente</S.Option>
        <S.Option>ofertas</S.Option>
        <S.Option>titulos de rv</S.Option>
        <S.Option>compatibles con mandos</S.Option>
        <S.Option>perfecto para dev</S.Option>
      </S.ListContainer>
      <S.ListContainer>
        <S.Title> explorar por genero</S.Title>
        <S.Option>free to play</S.Option>
        <S.Option>acceso anticipado</S.Option>
        <S.Option>accion</S.Option>
        <S.Option>aventura</S.Option>
        <S.Option>carreras</S.Option>
        <S.Option>casual</S.Option>
        <S.Option>deportes</S.Option>
        <S.Option>estrategia</S.Option>
        <S.Option>indie</S.Option>
        <S.Option>rol</S.Option>
        <S.Option>simulacion</S.Option>
      </S.ListContainer>
    </S.Container>
  );
};

export default List;
