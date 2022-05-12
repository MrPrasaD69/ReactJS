import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={()=>props.greetHandler('child')} className='btn btn-info m-2'>GREET PARENT</button> {/*'child' will be passed from here and fetched in parent comp. in greetParent func.*/}
    </div>
  )
}

export default ChildComponent