// import logo from './logo.svg';
import { Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
// import Cards from './component/Cards'
// import { useEffect, useState } from 'react';
// import axios from 'axios';
import { Route } from "react-router-dom";
import { Home } from "./component/Home";
import { Page } from "./component/Page";
import AddCard from "./component/AddCard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route path="/" element={<Page/>}/>
          <Route path="Home" element={<Home/>}/>
          <Route path="AddCard" element={<AddCard/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
