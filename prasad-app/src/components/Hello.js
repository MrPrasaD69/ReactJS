import React from 'react';

const Hello =(props)=> {
    // return React.createElement('div',{id:'main-frame'}, React.createElement('h1',null,'HELLO  WORLD'));
    const {name} = props; //another way of destructuring
    return (
    <div className='Main-Frame'> 
        <h2>Hello {name} </h2>
        {/*{props.children}*/} 
    </div>  
    )
    
}


export default Hello;