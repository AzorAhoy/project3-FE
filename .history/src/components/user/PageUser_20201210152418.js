import React, { Component } from 'react';
import FormSearchUser from './FormSearchUser';
import AddModal from './AddModal';
// import { FaBars } from 'react-icons/fa';
// import NavbarForm from '../NavbarForm';
// import { Col, Row } from 'react-bootstrap';
// import Navbars from '../Navbars';
import HomePage from '../HomePage';

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
                    <div>
                       
                       <HomePage/>
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
        );
    }
}


export default PageUser;

