import { useEffect, useState } from "react";
import "./Editor.css";
import EmotionItem from "./emotionItem";
import Button from "./Button";


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



const Editor = () => {
  const [selectedEmotion,setSelectedEmotion] = useState<null | number>(null);
  
  const onChangeEmotion = (emotionId:number) => {
    setSelectedEmotion(emotionId)
    if(selectedEmotion === emotionId){
      setSelectedEmotion(null)
    }
  }

  useEffect(()=>{
    console.log(selectedEmotion);
  },[selectedEmotion])

  return(
    <div className="Editor">

      <section className="Editor_date">
        <h4>오늘의 날짜</h4>
        <input type="date" />
      </section>
      
      <section className="Editor_emotion">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map(emotion => 
            <EmotionItem 
              key= {emotion.emotionId} 
              {...emotion} 
              selectedEmotion={selectedEmotion} 
              onChangeEmotion={onChangeEmotion}/>)}
        </div>
      </section>

      <section className="Editor_content">
        <h4>오늘의 일기</h4>
        <textarea placeholder="오늘은 어땠나요"></textarea>
      </section>

      <section className="Editor_button">
        <Button text="취소하기" type="Default"/>
        <Button text="작성완료" type="Positive" />
      </section>
    </div>
  )
}



export default Editor