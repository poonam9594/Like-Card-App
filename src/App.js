import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Like from './components/Like';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react'




function App() {
  const [like,setLike] =useState([])

  return (
    <div className="App">
      

      <Router>
         <Navbar like ={like}/>
          
         <Routes>
           <Route path = '/' element = {<Home results like={like} setLike ={setLike} />}/>
           <Route path = '/like' element = {<Like like ={like} setLike ={setLike}/>}/>

         </Routes>
      </Router>
    
      
      
    </div>
  );
}

export default App;

