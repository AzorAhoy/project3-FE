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
            sidebar={<b>Sidebar content</b>}
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{ sidebar: { background: "white", width:"20%" } }}
          >
            
            <FaBars style={}
            onClick={() => this.onSetSidebarOpen(true)} />
            
            
          </Sidebar>
        );
    }
}

export default HomePage;