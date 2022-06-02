import React,{useState} from 'react'


function ClassCounter() {
        //variable, method - state initialzed to 0
    const[count, setCount]= useState(0)
  return (
    <div>                {/**method to set count */}
        <button onClick={()=> setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default ClassCounter