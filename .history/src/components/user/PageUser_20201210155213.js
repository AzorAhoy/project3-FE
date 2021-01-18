import React, { Component } from 'react';
import FormSearchUser from './FormSearchUser';
//import AddModal from './AddModal';
// import { FaBars } from 'react-icons/fa';
// import NavbarForm from '../NavbarForm';
// import { Col, Row } from 'react-bootstrap';
// import Navbars from '../Navbars';
import HomePage from '../HomePage';
import CustomDialogContent from './CustomDialogContent';


class PageUser extends Component {
    render() {
        return (
                    <div>
                       
                       <HomePage/>
                        <div className="container">
                            <CustomDialogContent/>
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

