import { useNavigate } from "react-router-dom";
import type { mockDataType } from "../mockData";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";
import { useCallback, useEffect, useState } from "react";

interface DiaryListProps {
  data:mockDataType[]
}

const DiaryList = ({data}:DiaryListProps) => {
  const [currentSort, setCurrentSort] = useState("latest")

  const updateSorted = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentSort(e.target.value)
  }

  const getSortedData = useCallback(() => {
    return data.slice().sort((a,b)=>{
      if(currentSort === "latest"){
        return b.createdDate - a.createdDate
      }else{
        return a.createdDate - b.createdDate
      }
    })
  },[currentSort])

  const nav = useNavigate();

  const goToNewPage = () => {
    nav('/new');
  }


  useEffect(()=>{
    console.log(currentSort);
  },[currentSort])


  return(
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange = {updateSorted}>
          <option value="latest">최신순</option>
          <option value="oldest">오래된 순</option>
        </select>
        <Button onClick = {goToNewPage} text="새 일기 쓰기" type = "Positive"/>
      </div>
      
      <div className="list_wrapper">
        {getSortedData().map((item:mockDataType) => 
          <DiaryItem key= {item.id} {...item}/>
        )}
      </div>
    </div>
  )
}


export default DiaryList