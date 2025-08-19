import { createContext, useContext, useEffect, useState } from "react";


const MovieContext= createContext();

export const useMovieContext = ()=>useContext(MovieContext);

export const MovieProvider = ({children})=>{
    const [favorites, setFavorites]= useState(()=>{
        const stored = localStorage.getItem("favorites");
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(()=>{
        const storedFavs= localStorage.getItem("favorites");
        if(storedFavs) setFavorites(JSON.parse(storedFavs));

    },[])

    useEffect(()=>{
        localStorage.setItem('favorites', JSON.stringify(favorites))
    },[favorites])

    const addtoFavorites=(movie)=>{
        setFavorites(prev=>[...prev, movie]);

    }
    const removeFromFavorites=(movieId)=>{
        setFavorites(prev => prev.filter(movie=>movie.id!==movieId ));
    }
    const isFavorite = (movieId)=>{
        const res = favorites.some(movie=> movie.id===movieId);
        return res;

    }

    const value={
        favorites,
        addtoFavorites,
        removeFromFavorites,
        isFavorite
    }
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}

