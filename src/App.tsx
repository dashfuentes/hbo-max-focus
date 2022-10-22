import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Login from './components/screens/Login/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router> 
        <Routes>
        <Route exact path="/" element={<Login />} />
        </Routes>
      
    </Router>
 
    
    
  )
}

export default App
