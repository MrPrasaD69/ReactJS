import React,{useState,useEffect} from 'react'
import axios from 'axios';

function Popular() {
  
  // const [popular,setPopular]=useState([]);
  // useEffect(()=>{
  //   getPopular();
  // },[])

  // const getPopular=async()=>{
  //   const api=fetch("https://jsonplaceholder.typicode.com/posts");
  //   const data=await api.JSON();
  //   setPopular(data.title);
  //   console.log(data);

  //Function will set value to variable automatically
  const [books,setBooks]=useState([]);
  const url="https://jsonplaceholder.typicode.com/posts";
  
  useEffect(()=>{
    getBooks();
  },[])

  const getBooks=()=>{
    axios.get(url) //pass the API url
    .then((response)=>{ //gives us the response
      const allbooks=response.data; //store the response data 
      setBooks(allbooks); //use setter function to set data. 
    })
    .catch(error=> console.log(error));
  }
  return (
    <div className='container'>
        <h4>Popular</h4>
      {
        books.length ?
        books.map((book)=>{
          return(
            <div key={book.id}>
              <p id='data'>{book.title}</p>
            </div>
          )
        }) : "No data"
      }
    </div>
  )
}

export default Popular