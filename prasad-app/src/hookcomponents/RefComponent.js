import React,{useRef,useState, useEffect} from 'react'

function RefComponent() {
    const [name, setName]= useState('');
    const renderCount= useRef(0);

    useEffect(()=>{
        renderCount.current = renderCount.current + 1;
        
    })
    /* 
    useEffect(()=>{
        prevName.current = name;
    })
    */
  return (
    <div><hr/>
        <input type='text' value={name} onChange={e=> setName(e.target.value)} />
        <h2>My Name is {name}</h2>
        {/* <h3>I rendered {renderCount.current} times</h3> */}
    </div>
  )
}

export default RefComponent