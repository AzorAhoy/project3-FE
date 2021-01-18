import React, { Component } from 'react';
import HomePage from '../HomePage';
import { GrAdd } from "react-icons/gr";
import FormSearchUser from './FormSearchUser';
import AddModal from './AddModal';

class PageUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true
        }
    }

    render() {
        return (
            <div>
                <HomePage />
                <div className="container">
                    <div>
                        <button type="button" className="btn btn-primary"> < GrAdd /> THÊM NGƯỜI DÙNG </button>
                        <AddModal
                            show={this.state.show}
                        />
                    </div><br />
                    <div class="card bg-primary text-white">
                        <div class="card-body">DANH SÁCH NGƯỜI DÙNG</div>
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