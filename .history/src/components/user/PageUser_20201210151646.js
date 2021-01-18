import React, { Component } from 'react';
import FormSearchUser from './FormSearchUser';
import AddModal from './AddModal';
import { FaBars } from 'react-icons/fa';
import NavbarForm from '../NavbarForm';
import { Col, Row } from 'react-bootstrap';
import Navbars from '../Navbars';

class PageUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    showForm = () => {
        this.state({
            ...this.state,
            show: true
        })
        console.log("show in page  ", this.state.show);
    }
    render() {
        return (
            <Row>
                <Col xs={3} md={3} lg={3}>
                    <Navbars></Navbars>
                </Col>
                <Col xs={9} md={9} lg={9}>
                    <div>
                        {/* <HomePage /> */}
                        <div>
                            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                                <FaBars style={{ width: "20px" }}
                                    onClick={() => this.onSetSidebarOpen(true)} />
                                <NavbarForm />

                            </nav>
                        </div>
                        <div className="container">
                            {/* <AddModal></AddModal> */}
                            <div style={{ float: 'right' }}>
                                <AddModal
                                    show={this.state.show} open={() => this.showForm()}
                                />
                            </div><br />
                            <div className="card bg-primary text-white">
                                <div className="card-body">DANH SÁCH NGƯỜI DÙNG</div>
                            </div>
                            <div>
                                <FormSearchUser>

                                </FormSearchUser>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        );
    }
}


export default PageUser;

