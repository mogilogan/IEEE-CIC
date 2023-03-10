import React from "react";
import { Route, Routes } from 'react-router-dom';

import Header from "./components/Header";
import Home from "./components/Home";
import Call from "./components/Call";
import Committees from "./components/Committees";
import Contact from "./components/Contact";
import Paper from "./components/Paper";
import Registrations from "./components/Registrations";
import Timelines from "./components/Timelines";
import Venue from "./components/Venue";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col h-auto justify-between" >
      <div>
      <Header/>
      </div>
      <div className="flex-grow">
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/call' element={<Call/>} />
        <Route exact path='/committees' element={<Committees/>} />
        <Route exact path='/paper' element={<Paper/>} />
        <Route exact path='/registrations' element={<Registrations/>} />
        <Route exact path='/timelines' element={<Timelines/>} />
        <Route exact path='/venue' element={<Venue/>} />
      </Routes>
      </div>
      <div>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
