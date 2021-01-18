import React, { Component } from 'react';
import FormSearchUser from './FormSearchUser';
//import AddModal from './AddModal';
// import { FaBars } from 'react-icons/fa';
// import NavbarForm from '../NavbarForm';
// import { Col, Row } from 'react-bootstrap';
// import Navbars from '../Navbars';
import HomePage from '../HomePage';
import { Modal } from 'react-bootstrap';

class PageUser extends Component {
    render() {
        return (
                    <div>
                       
                       <HomePage/>
                        <div className="container">
                            <Modal/>
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

