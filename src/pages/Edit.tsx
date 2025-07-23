import { useNavigate, useParams } from "react-router-dom"
import Header from "../components/Header";
import Button from "../components/Button";
import Editor, { type InputType } from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import { useDiary } from "../hooks/useDiary";

const Edit = () => {
  const params = useParams(); 
  const nav = useNavigate();
  const goToPrevPage = ()=>nav(-1);
  const {onDelete , onUpdate} = useContext(DiaryDispatchContext) 
  const diaryData = useDiary(Number(params.id));

  const onClickDeleteButton = () => {
    if(window.confirm("정말로 삭제하시겠습니까?")){
      onDelete(Number(params.id));
      nav("/",{replace:true})
    }else {
      return
    }
  }
  
  const onSubmit = (input:InputType) => {
    if(!input.content || !input.emotionId || !input.content){
			window.alert("날짜, 감정, 일기 내용은 필수입니다.")
			return
		}
    if(input.createdDate && input.emotionId && input.content){
      onUpdate(Number(params.id),input.createdDate.getTime(),input.emotionId,input.content)
      nav("/",{replace:true})
    }
  }

  return (
    <>
      <Header 
        title="수정하기" 
        leftChild={
          <Button 
            text ="< 뒤로가기" 
            type="Positive" 
            onClick={goToPrevPage}
          />}
        rightChild= {
          <Button 
            text="삭제하기"
            type="Negative"
            onClick={onClickDeleteButton}
          />
        }
        />

      <Editor 
        {...diaryData}
        onSubmit={onSubmit} 
        goToPrevPage={goToPrevPage}/>
    </>
  )
}


export default Edit