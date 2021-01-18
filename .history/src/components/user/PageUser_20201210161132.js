import React, { Component } from 'react';
import AddModal from './AddModal';
import FormSearchUser from './FormSearchUser';
//import { GrAdd } from "react-icons/gr";
// import NavbarForm from '../NavbarForm';
// import { Col, Row } from 'react-bootstrap';
// import Navbars from '../Navbars';
//import HomePage from '../HomePage';
class PageUser extends Component {
    render() {
        return (
                    <div>
                       
                       {/* <HomePage/> */}
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
        );
    }
}


export default PageUser;

