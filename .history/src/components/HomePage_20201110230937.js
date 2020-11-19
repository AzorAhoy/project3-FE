import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import { FaBars } from 'react-icons/fa';
import './HomePage.css';
import Navbars from './Navbars';
import NavbarForm from './NavbarForm';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sidebarOpen: true
          
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.onSetSidebarClose = this.onSetSidebarClose.bind(this);
      }
     
      onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
      }
      onSetSidebarClose(close) {
        this.setState({ sidebarClose: close}) ;
      }
     
      render() {
        return (
          <Sidebar 
            sidebar={<Navbars/>}
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            >
           <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <FaBars style={{width:"20px"}}
              onClick={() => this.onSetSidebarOpen(true)} />
                   <NavbarForm/>
                    
            </nav>
           <div
            
          </Sidebar>
        );
    }
}

export default HomePage;