import { useNavigate, useParams } from "react-router-dom"
import Button from "../components/Button"
import Header from "../components/Header"
import Viewer from "../components/Viewer"
import { useDiary } from "../hooks/useDiary"
import { getStringedDate } from "../util/getStringedDate"

const Diary = () => {

	const params = useParams();
	const nav = useNavigate();
	const goToPrevPage = () => nav(-1)
	const diaryData = useDiary(Number(params.id));
	 
	
	if(!diaryData){
		return <div>...데이터 로딩중</div>
	}

	const {emotionId,createdDate,content} = diaryData

	const todayDate = getStringedDate(new Date(createdDate));
	return (
		<>
			<Header 
				title={`${todayDate} 기록`} 
				leftChild={<Button  text="< 뒤로가기" type="Default" onClick={goToPrevPage}/>} 
			/>

			<Viewer emotionId={emotionId} content={content}/>

		</>
	)
}


export default Diary