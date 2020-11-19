import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Navbars from './components/Navbars';
import ListStudents from './components/student/ListStudents';
import ListTeachers from './components/teacher/ListTeachers';

export default function App() {
  return (
    <>
    
    <div >
      <BrowserRouter>
        <HomePage/>
        <div>
          {/* <Navbars /> */}
          <Switch>
            <Route path="/home" component={ListTeachers} />
            <Route path="/ho-m" component={ListStudents} />
            {/* <Route path='/' /> */}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
    </>
  );
}

  
