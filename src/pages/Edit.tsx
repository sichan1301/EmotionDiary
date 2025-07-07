import { useParams } from "react-router-dom"

const Edit = () => {
  const params = useParams();
  
  return (
    <>{params.id}번 일기의 수정페이지</>
  )
}


export default Edit