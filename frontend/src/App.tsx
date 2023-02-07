import { useState } from 'react'
import './App.css'
import { Posts } from "./Component/Posts"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { getPageOfPosts } from '../../src/services/postService'


function App() {
  // const [next,setNext]=useState<string|null>(null)
  // const [previous,setPrevious]=useState<string|null>(null)


  return (
    <Router>
      <div className="App">
        
        <Routes>
              <Route path="/posts" 
                     element={<Posts/>}>

               </Route>
               
        </Routes>
       
      </div>
    </Router>
  )
}

export default App
