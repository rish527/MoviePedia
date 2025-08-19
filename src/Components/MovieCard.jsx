import React from 'react'
import { HugeiconsIcon } from '@hugeicons/react';
import { HeartAddIcon } from '@hugeicons/core-free-icons';
import '../css/MovieCard.css'
import { useMovieContext } from '../Contexts/MovieContext';

const MovieCard = ({movie}) => {
    const {isFavorite, addtoFavorites, removeFromFavorites}=useMovieContext();
    const favorite=isFavorite(movie.id);



    function onFavClick(e){
        e.preventDefault();
        if(favorite) removeFromFavorites(movie.id);
        else{
            addtoFavorites(movie);
            
        }
    }
  return (
    <div className='movie-card'>
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-overlay">
                <button className={`favorite-btn ${favorite?"active":""}`} onClick={onFavClick}>
                    <HugeiconsIcon size={24} icon={HeartAddIcon} />
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>
  )
}

export default MovieCard