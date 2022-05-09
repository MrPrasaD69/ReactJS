import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler(){
        console.log('button works');
    }

  render() {
    return (
      <div>
          <button onClick={this.clickHandler} className='btn btn-success m-1' >CLICK ME CLASS</button>
      </div>
    )
  }
}

export default ClassClick