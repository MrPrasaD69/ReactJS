import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={()=>props.greetHandler('child')} className='btn btn-info m-2'>GREET PARENT</button>
    </div>
  )
}

export default ChildComponent