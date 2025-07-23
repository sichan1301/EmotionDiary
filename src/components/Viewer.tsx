import { emotionList } from "../util/constant";
import { getEmotionImage } from "../util/get-emotion-image";
import "./Viewer.css";



interface ViewerProps {
  emotionId:number;
  content:string;
}

const Viewer = ({emotionId,content}:ViewerProps) => {

  const emotionItem = emotionList.find(diary => diary.emotionId === emotionId);

  return(
    <div className="viewer">
      <section className="viewer_emotion">
        <h4>오늘의 감정</h4>
        <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}  >
          <img src={getEmotionImage(emotionId)}  />
          <div>{emotionItem?.emotionName}</div>
        </div>
      </section>

      <section className="viewer_content">
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
          <p>{content}</p>
        </div>
      </section>
    </div>
  )
}


export default Viewer 