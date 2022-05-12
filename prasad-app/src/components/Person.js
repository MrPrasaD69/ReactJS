import React from 'react'

//destructure data here
function Person({persondata1}) {
  return (
    <div>
        {/*Fetch the person array with destructuring  */}
        <h4> I am {persondata1.name}, my age is {persondata1.age}</h4>
    </div>
  )
}

export default Person