import React from 'react';

function FunctionClick() {
    
    const clickHandler =()=>{
        alert('button works');
    } 
    return (
    <div>
        <button className='btn btn-warning' onClick={clickHandler}>CLICK ME</button>
    </div>
  )
}



export default FunctionClick