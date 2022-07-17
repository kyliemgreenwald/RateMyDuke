import React from 'react';
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import './App.css';
import Extracurriculars from './pages/Extracurriculars';
import Home from './pages/Home';
export const UserContext = React.createContext();

function App() {
  const[description, setDescription] = React.useState("");
  const[tags, setTags] = React.useState("");
  const[title, setTitle] = React.useState("");
  return (
    <UserContext.Provider value={{description, setDescription, tags, setTags, title, setTitle}}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/ratings/extracurriculars' element={<Extracurriculars />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
