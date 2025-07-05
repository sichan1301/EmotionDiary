import './App.css'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import NotFound from './pages/NotFound'
import { getEmotionImage } from './util/get-emotion-image'

function App() {
  
  const nav = useNavigate();
	
  const handleClick = () => {
		nav("/new");
	}


  return (
    <>
      <button onClick = {handleClick}>GO to New </button>
			<Link to ={"/new"}>New</Link>
      <img src={getEmotionImage(1)} />   
      <img src={getEmotionImage(2)} />   
      <img src={getEmotionImage(3)} />   
      <img src={getEmotionImage(4)} />   
      <img src={getEmotionImage(5)} />   

      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/new" element = {<New />} />
        <Route path = "/diary" element = {<Diary />} />
        <Route path = "*" element = {<NotFound />} />
      </Routes>
    </>
  )
}

export default App
