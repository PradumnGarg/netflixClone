import React,{useEffect, useState} from 'react';
import axios from './axios';
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";

const baseURL="https://image.tmdb.org/t/p/original/";

function Row({title,fetchURL,isRowLarge}) {
  
 const [movies,setMovies]=useState([]);
 const [trailerURL,setTrailerURL]=useState("");
  
  useEffect(()=>{
    async function fetchData(){
        
      const request=await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  },[fetchURL]);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerURL) {
      setTrailerURL("");
    } else {
      movieTrailer(movie?.name || movie?.title || movie?.original_title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerURL(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className='row'>
     
     <h2>{title}</h2>

      <div className='row_posters'>
        {movies.map((movie) => (
          <img
            onClick={()=>handleClick(movie)}
            className={`row_poster ${isRowLarge && "row_poster_large"}`}
            src={`${baseURL}${isRowLarge?movie.poster_path:movie.backdrop_path}`}
            alt={movie.name}
            key={movie.id} // Make sure to add a unique key for each element when using map.
          />
        ))}
      </div> 
      <div>
        {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
      </div>

    </div>

  )
}

export default Row