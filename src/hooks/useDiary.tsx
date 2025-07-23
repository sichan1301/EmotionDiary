import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import type { mockDataType } from "../mockData";
import { useNavigate } from "react-router-dom";

export const useDiary = (id:number) => {
  const [DiaryData,setDiaryData] = useState<mockDataType>();
  const data = useContext(DiaryStateContext);
  const nav = useNavigate();


  useEffect(()=>{
    const diaryData = data.find(diary => diary.id === Number(id));
    
    if(diaryData){
      setDiaryData(diaryData)
    }else{
      window.alert("존재하지 않는 일기입니다")
      nav('/',{replace:true})
    }
  },[id])

  return DiaryData

}



