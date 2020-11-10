import React, { Component } from 'react';
import Sidebar from ''
class HomePage extends Component {
    render() {
        return (
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
                    styles={{ sidebar: { background: "white" } }}
                  >
                    <button onClick={() => this.onSetSidebarOpen(true)}>
                      Open sidebar
                    </button>
                  </Sidebar>
        );
    }
}

export default HomePage;