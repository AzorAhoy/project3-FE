import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Navbars from './components/Navbars';
import ListTeachers from './components/teacher/ListTeachers';

export default function App() {
  return (
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
  );
}

  
