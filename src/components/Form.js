import * as S from './Form.styles'
import {useEffect, useState} from "react";

export default function Form({list, setList, setTotal, isEditing, setIsEditing}) {

    const [title, setTitle] = useState("");
    const [cost, setCost] = useState();
    const onChangeInput = (e) => {
        setTitle(e.target.value)
    }

    const onChangeCost = (e) => {
        setCost(+e.target.value)
    }

    const onClickSubmit = () => {
        if(title==="") return;

        const newData = {
            title,
            cost,
        }
        setList([...list, newData])
        setTitle("")
        setCost("")
        setTotal(prev => prev + +cost)
    }

    const onClickEdit = () => {
        if(title==="") return;
        setTotal(prev => prev - list[isEditing].cost + +cost)
        list[isEditing].title = title
        list[isEditing].cost = cost
        setTitle("")
        setCost("")
        setIsEditing(-1)
    }

    useEffect(() => {
        const start = () => {
            if(isEditing>=0) {
                setTitle(list[isEditing].title)
                setCost(list[isEditing].cost)
            }
        }
        start()
    }, [isEditing]);

        return(
            <S.Wrapper>
                <S.InputWrapper>
                    <S.Container>
                        <S.Label>지출 항목</S.Label>
                        {isEditing>=0 ?
                            <S.Input onChange={onChangeInput} value={title}/>
                            :
                            <S.Input placeholder="예) 렌트비" onChange={onChangeInput} value={title}/>
                        }
                    </S.Container>
                    <S.Container>
                        <S.Label>비용</S.Label>
                        {isEditing>=0 ?
                            <S.Input type="number" onChange={onChangeCost} value={cost}/>
                            :
                            <S.Input type="number" placeholder="0" onChange={onChangeCost} value={cost}/>
                        }
                    </S.Container>
                </S.InputWrapper>
                {isEditing>=0 ?
                    <S.Button onClick={onClickEdit}>수정</S.Button>
                    :
                    <S.Button onClick={onClickSubmit}>제출</S.Button>
                }

            </S.Wrapper>
        )
}