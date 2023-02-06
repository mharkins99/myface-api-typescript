import { useState } from 'react'
import './App.css'
import { Posts } from "./Component/Posts"
import{BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';


function App() {

  return (
    <Router>
    <div className="App">
{   <Routes>
        <Route path="/posts"element={<Posts/>}/>    
        </Routes>
     }

     <Posts/>
     </div>
     </Router>
  )
}

export default App
