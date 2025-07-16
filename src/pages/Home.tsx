import {useMemo, useState } from "react"
import Button from "../components/Button"
import DiaryList from "../components/DiaryList"
import Header from "../components/Header"

const Home = () => {
	
	const [pivotDate,setPivotDate] = useState(new Date());
	
	const currentDate = useMemo(()=>`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`,[pivotDate])
	
	const onDecreaseMonth = () => {
		setPivotDate(new Date(pivotDate.getFullYear(),pivotDate.getMonth()-1))
	}

	const onIncreaseMonth = () => {
		setPivotDate(new Date(pivotDate.getFullYear(),pivotDate.getMonth()+1))
	}

	

	return (			
		<>
			<Header
				title = {currentDate} 
				leftChild = {<Button text="<" type="Default"  onClick={onDecreaseMonth}/>} 
				rightChild = {<Button text=">" type="Default" onClick={onIncreaseMonth}/>} 
			/>

			<DiaryList />
		</>

	)
}


export default Home