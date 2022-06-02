import React, { Component } from 'react'
import axios from 'axios';
class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userID:'',
         title:'',
         body:''
      }
    }
    
    changeHandler=(e)=>{
        this.setState({[e.target.name]: e.target.value})  //target the values of form fields and set it to state.
    }

    submitHandler=(e)=>{
        e.preventDefault();
        console.log(this.state);
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state) //2nd argument-data that needs to be sent
    } 

  render() {
      const {userid, title, body} = this.state
    return (
      <div><hr/>
          <h3>FORM</h3>
          <form onSubmit={this.submitHandler}>
              <div>
                  {/*name attribute has same value from state to target values*/}
                  <label>USER ID</label>
                  <input type='text' name='userID' value={userid} onChange={this.changeHandler}/> 
              </div>
              <div>
                  <label>TITLE</label>
                  <input type='text' name='title' value={title} onChange={this.changeHandler}/>
              </div>
              <div>
                  <label>BODY</label>
                  <input type='text' name='body' value={body} onChange={this.changeHandler}/>
              </div>
              <button type="submit" className='btn btn-primary m-2'>SUBMIT</button>
          </form>
      </div>
    )
  }
}

export default PostForm