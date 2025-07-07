import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import NotFound from './pages/NotFound'
import Edit from './pages/Edit'

// import { getEmotionImage } from './util/get-emotion-image'
import Button from './components/Button'
import Header from './components/Header'
import { useReducer } from 'react'

function App() {
  
  type mockDataType = {
    id: number;
    createdDate: number;
    emotionId: number;
    content: string;
  };
  const mockData = [
    {
      id:1,
      createdDate:new Date().getTime(),
      emotionId:1,
      content:"1번째 내용"
    },
    {
      id:2,
      createdDate:new Date().getTime(),
      emotionId:2,
      content:"2번째 내용"
    },

  ]
  const reducer = (state:any,action:any) => {
    return state
  }

  const [data,dispatch] = useReducer(reducer,mockData)

  return (
    <>
      {/* <img src={getEmotionImage(1)} />    */}
      
      
      <Header 
        title="으어"
        leftChild={<Button text='버튼' type='Negative' />}
        rightChild={<Button text='버튼' type='Positive' />}
      />

      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/new" element = {<New />} />
        <Route path = "/diary/:id" element = {<Diary />} />
        <Route path = "/edit/:id" element = {<Edit />} />
        <Route path = "*" element = {<NotFound />} />
      </Routes>
    </>
  )
}

export default App
