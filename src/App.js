import React from 'react';
import Quiz from './Quiz';
import "./App.css"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from './component/Home';
import Ds from './component/Ds';
import C from './component/C';
import Javascript from './component/Javascript';
const App = () => {



  return (
    <>
    <h1 class="stylish-heading m-4">CODING,QUIZ!</h1>

  

    <Router>
    <Home/>

    <Routes>
    <Route path="/" element={<Quiz/>} />
    <Route path="Ds" element={<Ds/>} />
    <Route path="C" element={<C/>} />
    <Route path="javascript" element={<Javascript/>} />
    </Routes>


    </Router>
      

    {/* <Quiz></Quiz> */}
    </>
  
    
  );
};

export default App;
