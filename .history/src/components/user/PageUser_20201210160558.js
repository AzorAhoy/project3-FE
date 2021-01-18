import React, { Component } from 'react';
import FormSearchUser from './FormSearchUser';
//import AddModal from './AddModal';
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
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                                Open modal
                            </button>
                            {/* The Modal */}
                                <div className="modal" id="myModal">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                    {/* Modal Header */}
                                    <div className="modal-header">
                                        <h4 className="modal-title">Modal Heading</h4>
                                        <button type="button" className="close" data-dismiss="modal">×</button>
                                    </div>
                                    {/* Modal body */}
                                    <div className="modal-body">
                                        Modal body..
                                    </div>
                                    {/* Modal footer */}
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                    </div>
                                    </div>
                                </div>
                                </div>

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

