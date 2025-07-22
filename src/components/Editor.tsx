import { useCallback, useEffect, useState } from "react";
import "./Editor.css";
import Button from "./Button";
import EmotionItem from "./EmotionItem";


const emotionList  = [
  {
    emotionId:1,
    emotionName:"완전 좋은"
  },
    {
    emotionId:2,
    emotionName:"좋음"
  },
    {
    emotionId:3,
    emotionName:"그럭저럭"
  },
    {
    emotionId:4,
    emotionName:"나쁜"
  },
    {
    emotionId:5,
    emotionName:"완전 나쁨"
  }
]

export interface InputType {
  id?:number;
  createdDate: Date;
  emotionId: null | number;
  content:string;
}


interface EditorProps {
  onSubmit:(input:InputType)=>void;
  goToPrevPage:()=>void;
  createdDate?:number;
  emotionId?:number | null;
  content?:string;
}

const Editor = ({onSubmit,goToPrevPage,createdDate,emotionId,content}:EditorProps) => {
  
  const [input,setInput] = useState<InputType>({
    createdDate:new Date(),
    emotionId:null,
    content:"" 
  })

  const onChangeEmotion = (emotionId:number) => {
    if(input.emotionId && input.emotionId === emotionId){
      setInput({...input,emotionId:null})
    }else{
      setInput({...input,emotionId})
    }
  }

  const onChangeDateAndContent = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if(e.target.name === "createdDate"){
      setInput({...input,createdDate:new Date(e.target.value)})
    }else{
      setInput({...input,[e.target.name]:e.target.value})
    }    
  }

  const getStringedDate = useCallback(() => {
    const year = input.createdDate.getFullYear();
    const month = input.createdDate.getMonth() + 1;
    const date = input.createdDate.getDate();

    const stringedMonth = month < 10 ? `0${month}` : `${month}`;
    const stringedDate = date < 10 ? `0${date}` : `${date}`;

    return `${year}-${stringedMonth}-${stringedDate}`;
  },[input.createdDate]);


  useEffect(()=>{
    if(createdDate && emotionId && content){
      setInput({
        createdDate:new Date(createdDate),
        emotionId:emotionId,
        content:content 
      })
    }
  },[createdDate,emotionId,content])

  useEffect(()=>{
    getStringedDate();

  },[input.createdDate])



  useEffect(()=>{
    console.log(input.emotionId);
  },[input])

  return(
    <div className="Editor">

      <section className="Editor_date">
        <h4>오늘의 날짜</h4>
        <input onChange={onChangeDateAndContent} type="date" name="createdDate" value={getStringedDate()}/>
      </section>
      
      <section className="Editor_emotion">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map(emotion => 
            <EmotionItem 
              key= {emotion.emotionId} 
              {...emotion} 
              selectedEmotion={input.emotionId} 
              onChangeEmotion={onChangeEmotion}/>)}
        </div>
      </section>

      <section className="Editor_content">
        <h4>오늘의 일기</h4>
        <textarea 
          placeholder="오늘은 어땠나요" 
          value={input.content} 
          name="content"
          onChange={onChangeDateAndContent} />
      </section>

      <section className="Editor_button">
        <Button text="취소하기" type="Default" onClick = {goToPrevPage}/>
        <Button text="작성완료" type="Positive" onClick = {()=>onSubmit(input)}/>
      </section>
    </div>
  )
}



export default Editor