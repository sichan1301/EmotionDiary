import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import NotFound from './pages/NotFound'
import Edit from './pages/Edit'

// import { getEmotionImage } from './util/get-emotion-image'

import { createContext, useEffect, useReducer, useRef, useState } from 'react'
import { type mockDataType } from './mockData'

  function reducer(state:any, action:any) { 
    let nextState;
    

    switch (action.type) {
      case 'INIT': 
        return action.data;
      case 'CREATE': {
        nextState = [action.data,...state];
        break;
      }
      case 'UPDATE': {
        nextState = state.map((item:mockDataType) => item.id === action.data.id ? action.data:item);
        break;
      }
      case 'DELETE': {
        nextState = state.filter((item:mockDataType)=> item.id!==action.data.id);
        break;
      }
    }
    localStorage.setItem('diary',JSON.stringify(nextState));
    return nextState
  }


type DiaryDispatchType = {
  onCreate: (createdDate: number, emotionId: number | null, content: string) => void;
  onUpdate: (id: number, createdDate: number, emotionId: number, content: string) => void;
  onDelete: (id: number) => void;
};

export const DiaryStateContext = createContext<mockDataType[]>([]);
export const DiaryDispatchContext = createContext<DiaryDispatchType>({
    onCreate: () => {},
    onUpdate: () => {},
    onDelete: () => {}
  }
);


function App() {

  const idRef = useRef(0);
  const [data,dispatch] = useReducer(reducer,[])
  const [isLoading,setIsLoading] = useState(true);

  const onCreate = (createdDate:number,emotionId:number | null, content:string) => {

    dispatch({
      type:"CREATE",
      data:{
        id:idRef.current++,
        createdDate,
        emotionId,
        content
      }})
  }

  const onUpdate = (id:number, createdDate:number,emotionId:number, content:string) => {
    dispatch({
      type:"UPDATE",
      data:{
        id:id,
        createdDate,
        emotionId,
        content
      }})      
  }

  const onDelete = (id:number) => {
    dispatch({
      type:"DELETE",
      data:{
        id:id,
    }})   
  }


  useEffect(()=>{
    const storedData = localStorage.getItem('diary')
    
    if (!storedData || storedData === "undefined") {
      setIsLoading(false)
      return;
    }

    const parsedData = JSON.parse(storedData)
    console.log(parsedData);
    
    idRef.current = parsedData.length;

    dispatch({
      type:"INIT",
      data: parsedData
    })
    setIsLoading(false)
  },[])


  if(isLoading) {
    return <div>데이터 로딩중입니다...</div>
  }
  return (
    <>
      {/* <button onClick = {()=> onCreate( new Date().getTime(), 3, "Hello")}>새로운 일기 으어</button>
      <button onClick = {()=> onUpdate(1, new Date().getTime(), 3, "Hello")}>일기 수정 으어 </button>
      <button onClick = {()=> onDelete(2)}>2번 일기 삭제 으어</button> */}
      
      <DiaryStateContext.Provider value = {data}>
        <DiaryDispatchContext.Provider 
        value = {{
          onCreate,
          onUpdate,
          onDelete
        }}>
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/new" element = {<New />} />
            <Route path = "/diary/:id" element = {<Diary />} />
            <Route path = "/edit/:id" element = {<Edit />} />
            <Route path = "*" element = {<NotFound />} />
          </Routes>

        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App
