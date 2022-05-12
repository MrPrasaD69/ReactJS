import React, { Component } from 'react'
import StudentComponent from './StudentComponent';

class TeacherComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         marks: '100'
      }
    }

    displayMarks=(teachername)=>{
        alert(`Your Marks are ${this.state.marks} from ${teachername}`);
    }

  render() {
    return (
      <div> <hr/>
          <h5>This is Teacher Component</h5>
          <StudentComponent yourMarks={this.displayMarks}></StudentComponent>
      </div>
    )
  }
}

export default TeacherComponent