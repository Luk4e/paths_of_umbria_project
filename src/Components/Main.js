import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import React from 'react';
import NavbarComp from './NavbarComp';
import Home from '../Pages/Home';
import Contacts from '../Pages/Contacts';
import PathsAPiedi from '../Pages/PathsAPidi';
import NoMatch from '../Pages/NoMatch';
import SinglePath from '../Pages/SinglePath';

const Main = () => {
  return(
    <Router>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/paths_a_piedi/" element={<PathsAPiedi />} />
        <Route path="/paths_a_piedi/:pathId" element={<SinglePath />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
};

export default Main;
