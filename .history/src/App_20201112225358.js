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
            <Route path="/teacher" component={ListTeachers} />
            <Route path="/home" component={doac} />
            <Route path="/student" component={ListStudents} />
            <Route path="/teacher" component={ListStudents} />
            <Route path="/admin" component={ListStudents} />
            {/* <Route path='/' /> */}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
    </>
  );
}

  
