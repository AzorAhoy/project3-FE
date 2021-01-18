import { Button } from 'antd';
import Axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { Modal, ModalBody } from 'react-bootstrap';
function InfoCourse(props) {
    const { courseInfo } = props
    const [infor, setInfor] = useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        setTimeout(() => {
            setInfor(courseInfo)
        }, 500);
    }, [])
    const handleChange = async (e) => {
        const { name, value } = e.target
        console.log(value + "==>" + name);
        setInfor({
            ...infor,
            [name]: value
        })
    }
    const saveData = async () => {
        // Axios.post('')
    }
    return (
        <>
            <div>
                <div>
                    <Button className="btn-primary" color="info" onClick={() => {
                        console.log(11111);
                        handleShow()
                    }}>Chi tiết</Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header toggle={handleShow}>
                            Thông Tin Khóa Học
                        </Modal.Header>
                        <Modal.Body>

                            <div className="modal-body">
                                <form >
                                    <div className="form-group">
                                        <label className="col-form-label">Tên Khóa Học:</label>
                                        <input type="text" name="name" className="form-control" value={infor.name} onChange={(e) => {
                                            handleChange(e)
                                        }} />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">Môn Học:</label>
                                        <input type="text" className="form-control" name="subject" value={infor.subject} onChange={(e) => {
                                            handleChange(e)
                                        }} />
                                    </div>
                                    <div className="form-group">
                                        <label className="col-form-label">Ngày Bắt Đầu:</label>
                                        <input type="text" className="form-control" name="startDate" value={infor.startDate} onChange={(e) => {
                                            handleChange(e)
                                        }} />
                                    </div>

                                    <div className="form-group">
                                        <label className="col-form-label">Ngày Kết Thúc:</label>
                                        <input type="text" className="form-control" name="endDate" value={courseInfo.endDate} onChange={(e) => {
                                            handleChange(e)
                                        }} />
                                    </div>
                                </form>
                            </div>

                        </Modal.Body>
                        <Modal.Footer>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={() => {
                                saveData()
                            }}>Save changes</button>
                        </Modal.Footer>



                    </Modal></div>
            </div>

        </>
    );
}


export default InfoCourse;