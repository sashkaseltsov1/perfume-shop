import React from 'react';
import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import Content from "./components/content/content";
import {BrowserRouter} from "react-router-dom";

const App= ()=> {
  return (
      <BrowserRouter>
          <div className="App">
              <Header />
              <Navbar/>
              <Content />
          </div>
      </BrowserRouter>

  );
}

export default App;
