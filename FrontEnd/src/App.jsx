import React,{useEffect, useState} from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './Components/Landing/Landing'
import Login from './Pages/Login'
import { FaArrowUp } from "react-icons/fa";
import { Productdetails } from './Pages/Productdetails';

const App = () => {
  const [visible, setVisible] = useState(false);
  const togglevisible= () =>{
    if(window.scrollY >100){
      setVisible(true)
    }
    else{
      setVisible(false)
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll",togglevisible)
    return () => {
      window.removeEventListener("scroll",togglevisible)
    }
  },[])

  return (
    <>
    {visible && (
      <div className="" style={{position:"fixed",zIndex:"1000",backgroundColor:"red",bottom:"20px",right:"20px",borderRadius:"50%" ,padding:"18px",display:"flex",alignContent:"center"}}>
      <span className='ring' style={{position:"absolute",width:"100%",top:"0",left:"0",borderRadius:"50%",height:"100%",border:"1.4px solid red"}}></span>
      <a href="#"><FaArrowUp size={20} color='white'/></a>
    </div>
    )}


    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/menu/:id" element={<Productdetails/>}/>
      </Routes>
      
      
    
    </>
  )
}

export default App