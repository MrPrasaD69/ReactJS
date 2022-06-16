import React,{useState} from 'react'
import TestComp3 from './TestComp3'

function MouseContainer() {
    const[display,setDisplay]=useState(true);
  return (
    <div>
        <button onClick={()=> setDisplay(!display)}>Toggle Mouse Component</button>
        {
            display ? <TestComp3></TestComp3> : ''
        }
    </div>
  )
}

export default MouseContainer