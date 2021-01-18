import { Button } from 'antd';
import Axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { Modal, ModalBody } from 'react-bootstrap';
function ProfileStudent(props) {
    const { studentInfo } = props
    const [infor, setInfor] = useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                        handleShow()
                    }}>Chi tiết</Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header toggle={handleShow}>
                            Header
                        </Modal.Header>
                        <Modal.Body>

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

                        </Modal.Body>
                        <Modal.Footer>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </Modal.Footer>



                    </Modal></div>
            </div>

        </>
    );
}


export default ProfileStudent;