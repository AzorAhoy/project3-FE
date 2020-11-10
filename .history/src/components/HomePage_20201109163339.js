import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import { FaBars } from 'react-icons/fa';
import './HomePage.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          sidebarOpen: true
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
      }
     
      onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
      }
     
      render() {
        return (
          <Sidebar
            sidebar={}
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            
          >
            
            <FaBars style={{width:"50px"}}
            onClick={() => this.onSetSidebarOpen(true)} />
            
            
          </Sidebar>
        );
    }
}

export default HomePage;