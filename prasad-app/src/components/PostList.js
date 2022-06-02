import React, { Component } from 'react'
import axios from 'axios';


class PostList extends Component {
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
          <h3>PostList COMPONENT</h3>
          {
              posts.length ?
              posts.map(post=><div key={post.id}>{post.title}</div>) : "DATA NOT FOUND"
          }
      </div>
    )
  }
}

export default PostList