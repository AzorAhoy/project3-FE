import React, { Component } from "react";
import Sidebar from "react-sidebar";
import { FaBars } from "react-icons/fa";
import Navbars from "./Navbars";
import NavbarForm from "./NavbarForm";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.onSetSidebarClose = this.onSetSidebarClose.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  onSetSidebarClose(close) {
    this.setState({ sidebarClose: close });
  }

  // componentDidMount() {
  //   if (!localStorage.getItem("token")) {
  //     //setLogin(true);
  //     window.location.href = "/"; 
  //   }
  // }

  render() {
    return (
      <>
        <Sidebar
          sidebar={<Navbars />}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
        >
          {/* <div></div> */}
          <button onClick={() => this.onSetSidebarOpen(true)}>
            Open sidebar
          </button>
        </Sidebar>

        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          <FaBars
            style={{ width: "20px" }}
            onClick={() => this.onSetSidebarOpen(true)}
          />
          <NavbarForm />
        </nav>
      </>
    );
  }
}

export default HomePage;
