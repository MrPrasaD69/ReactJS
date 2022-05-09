import React from 'react'

function NameList() {
  //const names=['Bruce','Wayne','Diana'];
  const persons =[
      {
          name:'Prasad',
          age:22,
          skill: 'React'
      },
      {
        name:'Noddy',
        age:12,
        skill: 'React'
    }
    ]
  //const namelist = names.map(name=><h2>{name}</h2>) //using the map()
  const personlist = persons.map(person=>(<h2> I am {person.name}, my age is {person.age}</h2>) )
    return (
    <div>{personlist}</div>
  )
}

export default NameList