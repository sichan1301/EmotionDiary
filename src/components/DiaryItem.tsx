import { useNavigate } from "react-router-dom";
import { getEmotionImage } from "../util/get-emotion-image"
import Button from "./Button"
import "./DiaryItem.css";


interface DiaryItemProps{
  id: number;
  createdDate: number;
  emotionId: number;
  content: string;
}
const DiaryItem = ({id,createdDate,emotionId,content}:DiaryItemProps) => {
  const nav = useNavigate();

  const goToDetailPage = () => {
    nav(`/diary/${id}`)
  }

  const goToEditPage = () => {
    nav(`/edit/${id}`)
  }

  return(
    <div className="DiaryItem">

      <div className={`img_section img_section_${emotionId}`} onClick = {goToDetailPage}>
        <img src={getEmotionImage(emotionId)}  />
      </div>

      <div className="info_section" onClick = {goToDetailPage}>
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>

      <div className="button_section" onClick = {goToEditPage}>
        <Button text="수정하기" type="Default" />
      </div>
    </div>
  )
}



export default DiaryItem