import Editor from "../components/Editor"
import Header from "../components/Header"

const New = () => {
	return (
		<>
			<Header title="새 일기쓰기" leftChild ="< 뒤로가기"/>
			<Editor />
		</>
	)
}


export default New