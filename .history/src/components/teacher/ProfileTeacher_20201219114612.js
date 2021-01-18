import React, { Component } from 'react';

class ProfileTeacher extends Component {
    render() {
        return (
            
            <div>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Chi Tiết <i className="fas fa-pencil-alt" />
            </button>
            
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
                                        <label htmlFor="name" className="col-form-label">Tên Giáo Viên:</label>
                                        <input type="text" name="name" className="form-control" id="name"  />
                            </div>
                            <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">Email:</label>
                                        <input type="text" className="form-control" id="email" name="email"  />
                            </div>
                            {/* <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">Lớp:</label>
                                        <input type="text" className="form-control" id="role" name="userRole"  />
                            </div> */}
                            <div className="form-group">
                                        <label htmlFor="password" className="col-form-label">Ngày Tạo:</label>
                                        <input type="password" className="form-control" id="password" name="password"  />
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
        
        );
    }
}

export default ProfileTeacher;