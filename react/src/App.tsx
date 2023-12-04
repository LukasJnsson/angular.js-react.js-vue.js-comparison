
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Artist from './views/Artist';
import Venues from './views/Venues';
import Cities from './views/Cities';
import SetlistInCity from './views/SetlistInCity';
import Maps from './views/Maps';
import Error from './views/Error';


export default function App () {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/venues" element={<Venues />}/>
          <Route path="/cities" element={<Cities />}/>
          <Route path="/maps" element={<Maps />}/>
          <Route path="/cities/:id" element={<SetlistInCity />}/>
          <Route path="/artists/:mbid" element={<Artist />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </Router>
    </div>
  );
};