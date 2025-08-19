import React from 'react'
import MovieCard from './Components/MovieCard'
import Home from './Pages/Home';
import Favorite from './Pages/Favorite';
import './css/App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { MovieProvider } from './Contexts/MovieContext';

const App = () => {
  const mn=2;

  return (
    <MovieProvider>
      <Navbar />
      <div className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={ <Favorite /> } />
        
        </Routes>
      </div>

    </MovieProvider>
  )
}

export default App