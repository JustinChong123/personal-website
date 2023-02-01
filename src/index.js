import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AboutMe from './components/About Me/AboutMe';
import FitKitch from './components/Projects/Case Studies/FitKitch.js'
import Chronicle from './components/Projects/Case Studies/Chronicle.js'
import BudgetBalloon from './components/Projects/Case Studies/BudgetBalloon.js'
import EnvisionEarth from './components/Projects/Case Studies/EnvisionEarth.js'
import DartmouthPathfinder from './components/Projects/Case Studies/DartmouthPathfinder.js';
import PersonalWebsite from './components/Projects/Case Studies/PersonalWebsite.js';
import IPath from './components/Projects/Case Studies/iPath.js';
import ConferenceCupUSA from './components/Projects/Case Studies/ConferenceCupUSA.js';
import OhBuoy from './components/Projects/Case Studies/OhBuoy.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      <Routes>
        <Route path='/' element={<React.StrictMode><App/></React.StrictMode>} />
        <Route path='/aboutMe' element={<AboutMe />} />
        <Route path='/fitkitch-case-study' element={<FitKitch />} />
        <Route path='/chronicle-case-study' element={<Chronicle />} />
        <Route path='/budget-balloon-case-study' element={<BudgetBalloon />} />
        <Route path='/conferencecup-usa-case-study' element={<ConferenceCupUSA />} />
        <Route path='/oh-buoy-case-study' element={<OhBuoy />} />
        <Route path='/envision-earth-case-study' element={<EnvisionEarth />} />
        <Route path='ipath-case-study' element={<IPath />} />
      </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
