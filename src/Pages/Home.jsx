import React, { useEffect, useState } from 'react'
import MovieCard from '../Components/MovieCard'
import { searchMovies, getPopularMovies } from '../Services/api'
import '../css/Home.css'
const Home = () => {
    const [searchQuery, setSearchQuery]=useState("");
    const [movies, setMovies]=useState([]);
    const [error, setError]=useState(null);
    const [loading, setLoading]=useState(true);

    useEffect(()=>{
      const loadPopularMovies= async ()=>{
        try{
          const popularMovies=await getPopularMovies();
          setMovies(popularMovies);
        }
        catch(err){
          console.log(err);
          setError("Failed to load")
        }
        finally{
          setLoading(false);
        }
      }

      loadPopularMovies();
    },[])
    

    const handleSearch=async (e)=>{
      e.preventDefault();
      if(!searchQuery.trim()) return;
      if(loading) return;
      setLoading(true); 
      
      try {
        const searchResult= await searchMovies(searchQuery);
        setMovies(searchResult);
        setError(null);
      }
      catch(err){
        console.log(err);
        setError("Failed to load")
      }
      finally{
        setLoading(false);
      }

    }

  return (
    <div className='Home'>
        <form onSubmit={handleSearch} className="search-form">
            <input 
                type='text' 
                placeholder='Search movies' 
                className='search-input' 
                value={searchQuery} 
                onChange={(e)=>setSearchQuery(e.target.value)} 
            />
            <button type='submit' className="search-button">Search</button>
        </form>
      {error && <div className="error-message">{error}</div> }
      {loading ? ( <div className="loading">Loading...</div>
      ):(
        <div className="movies-grid">
          {movies.map(movie=>(
              (
                  <MovieCard key={movie.id} movie={movie} />
              )
          ))}
        </div>
      )
      }
      
    </div>
  )
}

export default Home
