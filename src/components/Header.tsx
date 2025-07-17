import './Header.css'

interface HeaderProps {
  title:string;
  leftChild?:React.ReactNode;
  rightChild?:React.ReactNode;
}
const Header = ({title,leftChild,rightChild}:HeaderProps) => {
  return(
    <header className='Header'>
      <div>{leftChild}</div>
      <div>{title}</div>
      <div>{rightChild}</div>
    </header>
  )
}



export default Header