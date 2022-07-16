import React from 'react';
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import './App.css';
import Extracurriculars from './pages/Extracurriculars';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/ratings/extracurriculars' element={<Extracurriculars />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
