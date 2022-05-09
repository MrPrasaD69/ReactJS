import React, { Component } from 'react'

class EventBind extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       message:'hello'
    }
    // this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
      this.setState({
          message:'Button Clicked'
      })
      // console.log('clicked');
  }
    render() {
    return (
      <div>
          <div>{this.state.message}</div>
          <button onClick={this.handleClick.bind(this)}>CLICK</button> {/*works when you bind 'this' keyword, no need of binding in const*/}
          {/*<button onClick={()=>this.handleClick()}>CLICK</button>*/} {/*works when you put arrow function and call the function with ()*/}
          
      </div>
    )
  }
}

export default EventBind