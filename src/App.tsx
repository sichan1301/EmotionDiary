import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import NotFound from './pages/NotFound'
// import { getEmotionImage } from './util/get-emotion-image'
import Button from './components/Button'
import Header from './components/Header'

function App() {
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
        <Route path = "/diary" element = {<Diary />} />
        <Route path = "*" element = {<NotFound />} />
      </Routes>
    </>
  )
}

export default App
