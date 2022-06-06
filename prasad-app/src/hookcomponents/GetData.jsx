import React,{useState,useEffect} from 'react'
import axios from 'axios'


function GetData() {
    const [data, setData]= useState([]);
    const url="https://jsonplaceholder.typicode.com/todos";

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=()=>{
        axios.get(url)
        .then((response)=>{
            const fetchedData=response.data;
            setData(fetchedData);
        })
        .catch(error=> console.log(error));
    }

  return (
    <div>
        <h2>GetData</h2>
        {
            data.map((data1)=>{
                return(
                    <div>
                        <p>{data1.title}</p>
                    </div>
                )
            })
        }

    </div>
  )
}

export default GetData