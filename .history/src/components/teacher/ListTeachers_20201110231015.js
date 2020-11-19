import React, { Component } from 'react';
import { FaBars } from 'react-icons/fa';
import Sidebar from 'react-sidebar';
import { withRouter } from 'react-router-dom';
import { Table } from 'react-table';
import NavbarForm from '../NavbarForm';
import Navbars from '../Navbars';
export default class ListTeachers extends Component {

    
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
            <div>
                aaaaaaaaaaaaaaaaaaaaaaaa
            </div>
            
          </Sidebar>
        );
    }
}

