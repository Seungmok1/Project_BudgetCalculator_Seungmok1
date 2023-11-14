import * as S from "./Lists.styles"
import List from "./List";

export default function Lists({list, setList, setTotal, setIsEditing}) {
    const onClickDeleteAll = () => {
        setList([])
        setTotal(0)
    }
    if(list.length>0){
        return(
            <S.Wrapper>
                {list.map((el, idx) => (
                    <List
                        el={el}
                        idx={idx}
                        list={list}
                        setList={setList}
                        setTotal={setTotal}
                        setIsEditing={setIsEditing}/>
                ))}
                <S.Button onClick={onClickDeleteAll}>목록 지우기</S.Button>
            </S.Wrapper>
        )
    }
}