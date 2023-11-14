import * as S from "./List.styles"

export default function List({el, idx, list, setList, setTotal, setIsEditing}) {
    const onClickUpdate = () => {
        setIsEditing(idx)
    }

    const onClickDelete = () => {
        const newList = list.filter((_, index) => index !== idx)
        setList(newList)
        setTotal(prev => prev - el.cost)
    }
    return(
        <S.Wrapper>
            <S.Title>{el.title}</S.Title>
            <S.Cost>{el.cost}</S.Cost>
            <S.Btn onClick={onClickUpdate}>수정</S.Btn>
            <S.Btn onClick={onClickDelete}>삭제</S.Btn>
        </S.Wrapper>
    )
}