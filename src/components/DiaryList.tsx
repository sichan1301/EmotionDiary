import type { mockDataType } from "../mockData";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";

interface DiaryListProps {
  data:mockDataType[]
}

const DiaryList = ({data}:DiaryListProps) => {
  return(
    <div className="DiaryList">
      <div className="menu_bar">
        <select>
          <option value="latest">최신순</option>
          <option value="oldest">오래된 순</option>
        </select>
        <Button text="새 일기 쓰기" type = "Positive"/>
      </div>
      
      <div className="list_wrapper">
        {data.map((item:mockDataType) => 
          <DiaryItem key= {item.id} {...item}/>
        )}
      </div>
    </div>
  )
}


export default DiaryList