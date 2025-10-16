import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student_Data from './components/Student_Data'
import Carts from './components/Carts'
import Task from './components/Task'
import MuiPractice from "./components/MuiPractice";
import Parent from './components/Parent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
{/* 
 <Task/>
 <Carts/> */}
 {/* <MuiPractice/> */}
 <Parent/>

 
    </>
  )
}

export default App
