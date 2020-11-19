import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Navbars from './components/Navbars';
import ListTeachers from './components/teacher/ListTeachers';

export default function App() {
  return (
    <>
    <HomePage/>
    <div className="content">
      <BrowserRouter>
       
        <div>
          {/* <Navbars /> */}
          <Switch>
            <Route path="/" component={ListTeachers} />
            {/* <Route path='/' /> */}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
    </>
  );
}

  