import React,{useEffect, useState} from 'react';
import axios from './axios';
import "./Row.css";

const baseURL="https://image.tmdb.org/t/p/original/";

function Row({title,fetchURL,isRowLarge}) {
  
 const [movies,setMovies]=useState([]);
  
  useEffect(()=>{
    async function fetchData(){
        
      const request=await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  },[fetchURL]);

  console.log(movies)

  return (
    <div className='row'>
     
     <h2>{title}</h2>

      <div className='row_posters'>
        {movies.map((movie) => (
          <img
            className={`row_poster ${isRowLarge && "row_poster_large"}`}
            src={`${baseURL}${isRowLarge?movie.poster_path:movie.backdrop_path}`}
            alt={movie.name}
            key={movie.id} // Make sure to add a unique key for each element when using map.
          />
        ))}
      </div> 

    </div>

  )
}

export default Row