import Button from "../components/Button"
import DiaryList from "../components/DiaryList"
import Header from "../components/Header"

const Home = () => {
	return (			
		<>
			<Header
				title = {"2025.07"} 
				leftChild = {<Button text="<" type="Default" />} 
				rightChild = {<Button text=">" type="Default" />} 
			/>

			<DiaryList />
		</>

	)
}


export default Home