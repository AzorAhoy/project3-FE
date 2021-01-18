import Axios from 'axios';
import React, { Component, useState } from 'react';
function ProfileStudent(props) {
    const [infor, setInfor] = useState(props)
    // const getData = async () => {
    //     const res = await Axios.get('http://localhost:5000/api/student/', {
    //         headers: {
    //             'Authorization': localStorage.getItem('token')
    //         }
    //     })
    // }
    const handleChange = async (e) => {
        const { name, value } = e.target
        console.log(value + "==>" + name);
        setInfor({
            ...infor,
            [name]: value
        })
    }
    const handleClick = async () => {
        console.log("state   ", JSON.stringify(this.state));
    }
    // console.log("props", this.props.studentInfo);

    return (
        <>

            <div>
                <div>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => {
                        this.handleClick()
                    }}>
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
                                            <label className="col-form-label">Tên Học Viên:</label>
                                            <input type="text" name="name" className="form-control" value={infor.name} onChange={(e) => {
                                                handleChange(e)
                                            }} />
                                        </div>
                                        <div className="form-group">
                                            <label className="col-form-label">Email:</label>
                                            <input type="text" className="form-control" name="email" value={infor.email} onChange={(e) => {
                                                handleChange(e)
                                            }} />
                                        </div>

                                        <div className="form-group">
                                            <label className="col-form-label">Ngày Tạo:</label>
                                            <input type="datetime" className="form-control" name="creatAt" value={infor.lastUpate} onChange={(e) => {
                                                handleChange(e)
                                            }} />
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

        </>
    );
}


export default ProfileStudent();