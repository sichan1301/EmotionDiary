import { useNavigate } from "react-router-dom"
import Editor, { type InputType } from "../components/Editor"
import Header from "../components/Header"
import Button from "../components/Button";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New = () => {

	const nav = useNavigate();
	const goToPrevPage = () => nav(-1);

	const { onCreate } = useContext(DiaryDispatchContext);

	const onSubmit  = (input:InputType) => {
		if(!input.content || !input.emotionId || !input.content){
			window.alert("날짜, 감정, 일기 내용은 필수입니다.")
			return
		}
		onCreate(
			input.createdDate.getTime(),
			input.emotionId,
			input.content
		);

		nav("/",{replace:true})
	}


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
			<Editor 
				onSubmit = {onSubmit} 
				goToPrevPage={goToPrevPage} />
		</>
	)
}


export default New