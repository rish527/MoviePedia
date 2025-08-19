import React from 'react'
import '../css/Favorites.css'
import { useMovieContext } from '../Contexts/MovieContext'
import { use } from 'react'
import MovieCard from '../Components/MovieCard';
function Favorite() {
  const {favorites}=useMovieContext();
  console.log(favorites);
  if(favorites.length!==0){
    return(
      <div className="movies-grid">
          {favorites.map(movie=>(
              (
                  <MovieCard key={movie.id} movie={movie} />
              )
          ))}
        </div>
    )
  }
  else{
    return (
      <div className='favorites-empty'>
          <h2>No Favorite Movies Yet</h2>
          <p>Start adding...</p>
      </div>
    )
  }
}

export default Favorite