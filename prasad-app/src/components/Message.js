import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
    };
  }

  changeMessage(){
      this.setState({
        message:'Thank you for Subscribing'
      })
  }

  render() {
    return (
      <div>
        <h4>{this.state.message}</h4>
        <button onClick={()=>this.changeMessage()} className="btn btn-danger">SUBSCRIBE</button>
      </div>
    );
  }
}

export default Message;
