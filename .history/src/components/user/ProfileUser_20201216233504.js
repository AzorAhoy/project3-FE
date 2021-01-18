import React, { Component } from 'react';
import { BsFillInfoCircleFill } from "react-icons/bs";
class ProfileUser extends Component {
    render() {
        return (
            <div>
                <div>
                <div type="icon" className="icon" data-toggle="modal" data-target="#exampleModal">
                    <BsFillInfoCircleFill/>
                </div>
                
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
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
                                            <input type="text" className="form-control" id="role" name="userRole" onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="col-form-label">Password:</label>
                                            <input type="password" className="form-control" id="password" name="password" onChange={this.handleChange} />
                                        </div><div className="form-group">
                                            <label htmlFor="message-text" className="col-form-label">Nhập lại Password:</label>
                                            <input type="password" className="form-control" id="password2" name="password2" onChange={this.handleChange} />
                                        </div>
                                    </form>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default ProfileUser;