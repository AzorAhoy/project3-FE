import React from 'react';
import { Router } from 'react-router-dom';
import './App.css';
import Navbars from './components/Navbars';

function App() {
  return (
          <>
          <Router>
            <Navbars/>
              
            </Navbars>
          </Router>
          </>
        );
    }
 
export default App;
