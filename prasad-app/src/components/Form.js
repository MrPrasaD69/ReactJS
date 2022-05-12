import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topics: 'react'
      }
    }

//when username value is changed, it will be set via this event handler
handleUsernameChange=(event)=>{
    this.setState({
        username: event.target.value
    })
}
handleCommentsChange=(event)=>{
    this.setState({
        comments: event.target.value
    })
}

handleTopicsChange=(event)=>{
    this.setState({
        topics: event.target.value
    })
}
handleSubmit=(event)=>{
    alert(`${this.state.username} ${this.state.comments} ${this.state.topics}`);
    event.preventDefault();
}

  render() {
      const{username, comments, topics }=this.state;
    return (
        <form onSubmit={this.handleSubmit}>
            <div className='main-form'>
                <hr/>
                <h4>Form Component</h4>
                <label>USERNAME</label>
                <input type='text' value={username} onChange={this.handleUsernameChange}/>
            </div>
            <div>
                <label>Comments</label>
                <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
            </div>
            <div>
                <select value={topics} onChange={this.handleTopicsChange}>
                    <label>Topics</label>
                    <option value='angular'>Angular</option>
                    <option value='react'>React</option>
                    <option value='vue'>Vue</option>
                </select>
            </div>
            <input type='submit' value='SUBMIT' />
      </form>
    )
  }
}

export default Form