
import React, { Component, useEffect, useState } from 'react';
function InfoClass(props){
    const { classInfo } = props
    const [infor, setInfor] = useState('')
    
    useEffect(() => {
        setTimeout(() => {
            setInfor(classInfo)
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
            
                <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Chi Tiết
                </button>
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Thông Tin Lớp Học</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        </div>
                        <div className="modal-body">
                                <form >
                                    <div className="form-group">
                                        <label className="col-form-label">Tên Lớp Học:</label>
                                        <input type="text" name="name" className="form-control" value={infor.name} onChange={(e) => {
                                            handleChange(e)
                                        }} />
                                    </div>
                                    {/* <div className="form-group">
                                        <label className="col-form-label">Môn Học:</label>
                                        <input type="text" className="form-control" name="subject" value={infor.subject} onChange={(e) => {
                                            handleChange(e)
                                        }} />
                                    </div> */}
                                    <div className="form-group">
                                        <label className="col-form-label">Ngày Bắt Đầu:</label>
                                        <input type="text" className="form-control" name="startDate" value={infor.startDate} onChange={(e) => {
                                            handleChange(e)
                                        }} />
                                    </div>

                                    <div className="form-group">
                                        <label className="col-form-label">Ngày Kết Thúc:</label>
                                        <input type="datetime" className="form-control" name="endDate" value={courseInfo.endDate} onChange={(e) => {
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

            
        );
    
}

export default InfoClass;