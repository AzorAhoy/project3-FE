import { Button } from 'antd';
import Axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { Modal, ModalBody } from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
function ProfileStudent(props) {
    const { studentInfo } = props
    const [infor, setInfor] = useState('')
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const handleChange = async (e) => {
        const { name, value } = e.target
        console.log(value + "==>" + name);
        setInfor({
            ...infor,
            [name]: value
        })
    }
    return (
        <>

            <div>
                <div>
                    <Button color="info" onClick={() => {
                        console.log(11111);
                        toggle
                    }}>Chi tiết</Button>
                    <Modal isOpen={modal} toggle={toggle} >
                        <ModalHeader toggle={toggle}>
                        </ModalHeader>
                        <ModalBody>

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
                                                    <input type="text" name="name" className="form-control" value={studentInfo.name} onChange={(e) => {
                                                        handleChange(e)
                                                    }} />
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-form-label">Email:</label>
                                                    <input type="text" className="form-control" name="email" value={studentInfo.email} onChange={(e) => {
                                                        handleChange(e)
                                                    }} />
                                                </div>

                                                <div className="form-group">
                                                    <label className="col-form-label">Ngày Tạo:</label>
                                                    <input type="datetime" className="form-control" name="creatAt" value={studentInfo.lastUpate} onChange={(e) => {
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
                        </ModalBody>

                    </Modal></div>
            </div>

        </>
    );
}


export default ProfileStudent;