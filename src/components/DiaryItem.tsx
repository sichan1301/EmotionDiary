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

  return(
    <div className="DiaryItem">

      <div className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)}  />
      </div>

      <div className="info_section">
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>

      <div className="button_section">
        <Button text="수정하기" type="Default" />
      </div>
    </div>
  )
}



export default DiaryItem