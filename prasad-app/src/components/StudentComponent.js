import React from 'react'

function StudentComponent(props) {
  return (
    <div>
        <button onClick={()=>props.yourMarks('Dency')} className='btn btn-primary'>SHOW MARKS</button>
    </div>
  )
}

export default StudentComponent