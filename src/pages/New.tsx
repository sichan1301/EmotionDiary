import { useNavigate } from "react-router-dom"
import Editor from "../components/Editor"
import Header from "../components/Header"
import Button from "../components/Button";

const New = () => {

	const nav = useNavigate();
	const goToPrevPage = () => nav(-1);

	return (
		<>
			<Header 
				title="새 일기쓰기" 
				leftChild = {
					<Button 
						text={"< 뒤로가기"} 
						onClick = {()=>goToPrevPage()}
						type="Default"
					/>
				}
			/>
			<Editor />
		</>
	)
}


export default New