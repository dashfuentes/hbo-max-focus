import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Login from './components/screens/Login/index'
import Home from './components/screens/Home';
import NotFound from './components/screens/NotFound';
import SearchPage from './components/screens/SearchPage';
import MovieDetail from './components/screens/Details'
import Favorite from './components/screens/Favorites';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router> 
        <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/search-movies" element={<SearchPage />} />
        <Route exact path="/movie-details" element={<MovieDetail />} />
        <Route exact path="/favorite-movie" element={<Favorite />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
      
    </Router> 
    
  )
}

export default App
