import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Navbars from './components/Navbars';
import ListTeachers from './components/teacher/ListTeachers';

function App() {
  return (
          <>
          <Router>
            <Navbars/>
              <Switch>
                <Route path = "/home">
                  <
                </Route>
                
              </Switch>
            
          </Router>
          </>
        );
    }
 
export default App;
