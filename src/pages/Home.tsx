import { useCallback, useContext, useEffect, useMemo, useState } from "react"
import Button from "../components/Button"
import DiaryList from "../components/DiaryList"
import Header from "../components/Header"
import { DiaryStateContext } from "../App"

const Home = () => {
	const data = useContext(DiaryStateContext);

	const [pivotDate,setPivotDate] = useState(new Date());
	
	const currentDate = useMemo(()=>`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`,[pivotDate])
	
	const onDecreaseMonth = () => {
		setPivotDate(new Date(pivotDate.getFullYear(),pivotDate.getMonth()-1))
	}

	const onIncreaseMonth = () => {
		setPivotDate(new Date(pivotDate.getFullYear(),pivotDate.getMonth()+1))
	}

	const getMonthlyData = useCallback (() => {

		const monthBeginDate = new Date(pivotDate.getFullYear(),pivotDate.getMonth(),1,0,0,0).getTime();
		const monthEndDate = new Date(pivotDate.getFullYear(),pivotDate.getMonth()+1,0,23,59,59).getTime(); 
		// day를 0으로 설정하면 0일은 없기 때문에 전날로 설정됨 

		return data.filter(item => monthBeginDate <= item.createdDate && item.createdDate <=monthEndDate)
	},[pivotDate,data])

	const monthlyData = getMonthlyData();

	useEffect(()=>{
		getMonthlyData();
		console.log(getMonthlyData())
	},[pivotDate,data])


	// if(!data) return

	return (			
		<>
			<Header
				title = {currentDate} 
				leftChild = {<Button text="<" type="Default"  onClick={onDecreaseMonth}/>} 
				rightChild = {<Button text=">" type="Default" onClick={onIncreaseMonth}/>} 
			/>

			<DiaryList data={monthlyData}/>
		</>

	)
}


export default Home