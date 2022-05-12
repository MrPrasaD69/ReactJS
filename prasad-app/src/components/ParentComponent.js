import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent'
      }
    }
    
    //
    greetParent=(childName)=>{ 
        alert(`Hello ${this.state.parentName} from ${childName} `); 
    }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent}></ChildComponent> {/*Pass an attribute to child with method reference*/}
      </div>
    )
  }
}

export default ParentComponent