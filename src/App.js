import * as S from "./App.styles";
import Form from "./components/Form";
import Lists from "./components/Lists";
import {useState} from "react";

function App() {
    const [list, setList] = useState([])
    const [total, setTotal] = useState(0)
    const [isEditing ,setIsEditing] = useState(-1)
    return (
      <S.Container>
        <S.Title>예산 계산기</S.Title>
        <S.Body>
            <Form list={list} setList={setList} setTotal={setTotal} isEditing={isEditing} setIsEditing={setIsEditing}/>
            <Lists list={list} setList={setList} setTotal={setTotal} setIsEditing={setIsEditing}/>
        </S.Body>
        <S.Total>총지출 : {total}원</S.Total>
      </S.Container>
  );
}

export default App;
