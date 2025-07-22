import { useNavigate, useParams } from "react-router-dom"
import Button from "../components/Button"
import Header from "../components/Header"
import Viewer from "../components/Viewer"

const Diary = () => {

	const params = useParams();
	const nav = useNavigate();
	const goToPrevPage = () => nav(-1)
	return (
		<>
			<Header 
				title="yyyy-mm-dd 기록" 
				leftChild={<Button  text="< 뒤로가기" type="Default" onClick={goToPrevPage}/>} 
				rightChild={<Button text="수정하기" type="Default" />} 
			/>

			<Viewer />

		</>
	)
}


export default Diary