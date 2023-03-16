import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import React from 'react';
import NavbarComp from './NavbarComp';
import Contacts from '../Pages/Contacts';
import PathsAPiedi from '../Pages/PathsAPidi';
import NoMatch from '../Pages/NoMatch';
import SinglePath from '../Pages/SinglePath';
import About from '../Pages/About';

const Main = () => {
  return(
    <Router>
      <NavbarComp />
      <Routes>
        <Route path="/aboutus" element={<About />} />
        <Route path="/" element={<PathsAPiedi />} />
        <Route path="/:pathId" element={<SinglePath />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Router>
  );
};

export default Main;
