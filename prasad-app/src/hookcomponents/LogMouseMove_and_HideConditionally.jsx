import React,{useState,useEffect} from 'react'

function TestComp3() {
  const[x,setX]=useState(0);
  const[y,setY]=useState(0);

  const logMousePosition=(e)=>{
    console.log("mouse moved")
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(()=>{
    console.log("useEffect called");
    window.addEventListener('mousemove',logMousePosition);

    return ()=>{
      console.log("component unmounted");
      window.removeEventListener('mousemove', logMousePosition);
    }
  },[])

  return (
    <div>
      <h2>X: {x} and Y: {y}</h2>
    </div>
  )
}

export default TestComp3