import React, { Component } from 'react';
import Navbars from '../Navbars';
import AddModal from './AddModal';
import FormSearchUser from './FormSearchUser';
import Sidebar from 'react-sidebar';
import { FaBars } from 'react-icons/fa';
import NavbarForm from '../NavbarForm';
//import { GrAdd } from "react-icons/gr";
// import NavbarForm from '../NavbarForm';
// import { Col, Row } from 'react-bootstrap';
// import Navbars from '../Navbars';

class PageUser extends Component {
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
            <>
                    <div>
                        <Sidebar 
                        sidebar={<Navbars/>}
                        open={this.state.sidebarOpen}
                        onSetOpen={this.onSetSidebarOpen}
                        />

                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            <FaBars style={{width:"20px"}}
                            onClick={() => this.onSetSidebarOpen(true)} />
                                <NavbarForm/>
                                    
                        </nav>
                    </div>
                    <div>
                        <div className="container">
                            <AddModal/>
                            <div className="card bg-primary text-white">
                                <div className="card-body">DANH SÁCH NGƯỜI DÙNG</div>
                            </div>
                            <div>
                                <FormSearchUser>

                                </FormSearchUser>
                            </div>
                        </div>
                    </div>
            </>
        );
    }
}


export default PageUser;

