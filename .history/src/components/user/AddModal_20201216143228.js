import React, { Component } from 'react';
import axios from 'axios';

class AddModal extends Component {
    state = {
        name: '',
        email: '',
        userRole: '',
        password: '',
        password2: ''
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value,

        });

    }


    handleSubmit = event => {
        //console.log(this.state.name);
        // event.preventDefault();
        console.log('12334')
        const user = {
            name: this.state.name,
            email: this.state.email,
            userRole: this.state.userRole,
            password: this.state.password,
            password2: this.state.password2,

        };

        axios.post('http://localhost:5000/api/auth/register', { user },
            {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            })
        
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }
    render() {
        return (
            <div>
                <div>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                        Thêm Người Dùng
                    </button>

                    <div className="modal" id="myModal">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h4 className="modal-title">Thêm Người Dùng</h4>
                                    <button type="button" className="close" data-dismiss="modal">×</button>
                                </div>

                                <div className="modal-body">
                                    <form >
                                        <div className="form-group">
                                            <label htmlFor="name" className="col-form-label">Tên Người Dùng:</label>
                                            <input type="text" name="name" className="form-control" id="name" onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message-text" className="col-form-label">Email:</label>
                                            <input type="text" className="form-control" id="email" name="email" onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message-text" className="col-form-label">Vai Trò:</label>
                                            <input type="text" className="form-control" id="role" onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="col-form-label">Password:</label>
                                            <input type="password" className="form-control" id="password" onChange={this.handleChange} />
                                        </div><div className="form-group">
                                            <label htmlFor="message-text" className="col-form-label">Nhập lại Password:</label>
                                            <input type="password" className="form-control" id="password2" onChange={this.handleChange} />
                                        </div>
                                    </form>

                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => this.handleSubmit()}>Thêm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default AddModal;