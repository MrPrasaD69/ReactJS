import React from 'react'
import Person from './Person'
function NameList() {
  const names=['Bruce','Wayne','Diana'];
  const persons =[
      {
          id:1,
          name:'Prasad',
          age:22,
          skill: 'React'
      },
      {
        id:2,
        name:'Noddy',
        age:12,
        skill: 'React'
    }
    ]
  const namelist = names.map((name,index)=><h4 key={index} > {index} {name}</h4>) //using the map() FOR ARRAYS, index as 2nd param

  //here we send person array with props
  const personlist = persons.map(persondata=> <Person key={persondata.id} persondata1={persondata}></Person>) // Pass person array and person.id which is unique
  
    return (
    <div>
      {personlist}
      {namelist}
    </div>
    
  )
}

export default NameList