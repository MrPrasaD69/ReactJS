import React, { Component } from 'react'

class ClickCounter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }
  handleClick=()=>{
    this.setState(prevState =>{
      return{count: prevState.count + 1}
    })
  }
  render() {
    const {count} = this.state; 
    return (
      <div><hr/>
        <button onClick={this.handleClick} className='btn btn-warning'>CLICKED {count} TIMES</button>
      </div>
    )
  }
}

export default ClickCounter