import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Login from './components/screens/Login/index';
import Home from './components/screens/Home';
import Favorite from './components/screens/Favorites';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router> 
        <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/favorite-movie" element={<Favorite />} />
        </Routes>
      
    </Router>
 
    
    
  )
}

export default App
