import React,{useEffect, useState} from 'react';
import axios from './axios';

function Row({title,fetchURL}) {
  
 const [movies,setMovies]=useState([]);
  
  useEffect(()=>{
    async function fetchData(){
        
      const request=await axios.get(fetchURL);
      console.log(request);
      return request;
    }
    fetchData();
  },[movies]);

  return (
    <div>
     
     <h2>{title}</h2>

    </div>

  )
}

export default Row