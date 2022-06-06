import React, { Component } from 'react'
import axios from 'axios';


class GetList extends Component {
    constructor(props){
        super(props)
        
        this.state={
            posts:[]
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response =>{
           // console.log(response)
            this.setState({posts:response.data})
        })
        .catch(error =>{
            console.log(error)
        })
    }


  render() {
      const {posts}=this.state
    return (
      <div><hr/>
          <h3>GetList COMPONENT</h3>
          {
              posts.length ?
              posts.map(post=><div className='list' key={post.id}>{post.title}</div>) : "DATA NOT FOUND"
          }
      </div>
    )
  }
}

export default GetList