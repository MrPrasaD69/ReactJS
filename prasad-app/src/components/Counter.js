import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1, //this is 1st param an object as value.
    //   },
    //   () => {
    //     console.log('Callback value ',this.state.count); //this is 2nd param as a callback func. 
    //   }
    // );

    this.setState(prevState => ({  //using previous state to set counter rather than current state
        count: prevState.count + 1
    }))
    console.log('Callback value:',this.state.count);
  }

  
  decrement() {
    this.setState({
        count: this.state.count - 1,
    });
  }



  render() {
    return (
      <div>
        <hr />
        <h2>Count : {this.state.count}</h2>
        <button
          onClick={() => this.increment()}
          className="btn btn-success m-2"
        >
          +
        </button>
        <button onClick={() => this.decrement()} className="btn btn-danger">
          -
        </button>
      </div>
    );
  }
}

export default Counter;
