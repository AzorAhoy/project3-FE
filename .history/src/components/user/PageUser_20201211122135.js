import React, { Component } from 'react';
// import Navbars from '../Navbars';
import AddModal from './AddModal';
import FormSearchUser from './FormSearchUser';
//import Sidebar from 'react-sidebar';
import { FaBars } from 'react-icons/fa';
import NavbarForm from '../NavbarForm';

class PageUser extends Component {
    
    render() {
        return (
            <>
                    <div>
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            <FaBars id="openNav"
                            onClick={this.openSidebar} />
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
                </div>
            </>
        );
    }
}


export default PageUser;

