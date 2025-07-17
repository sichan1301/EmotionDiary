import { useMemo } from 'react';
import { getEmotionImage } from '../util/get-emotion-image';
import './EmotionItem.css';


interface EmotionItemProps {
  emotionId:number;
  emotionName:string;
  onChangeEmotion:(emotionId:number)=>void;
  selectedEmotion: number | null;
}

const EmotionItem = ({emotionId,emotionName,onChangeEmotion,selectedEmotion}:EmotionItemProps) => {
  
  const isSelected = useMemo<boolean>(()=>selectedEmotion===emotionId,[selectedEmotion,emotionId])
  
  return(
    <div className={`EmotionItem ${isSelected && `emotionItem_on_${selectedEmotion}`}`} onClick={()=>onChangeEmotion(emotionId)} >
      <img className="emotion_img" src={getEmotionImage(emotionId)} />
      <div className="emotion_name">{emotionName}</div>
    </div>
  )
}



export default EmotionItem;