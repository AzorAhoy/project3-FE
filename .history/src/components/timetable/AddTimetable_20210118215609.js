import React, { Component } from 'react';
import axios from 'axios';

class AddTimetable extends Component {
    state = {
        classId: '',
        courseId: '',
        day: '',
        start: '',
        end: ''
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
            classId: this.state.classId,
            courseId: this.state.courseId,
            day: this.state.day,
            start: this.state.start,
            end: this.state.end,

        };
        
        console.log(JSON.stringify(user) + "==>", localStorage.getItem('token'));
        // axios.post('http://localhost:5000/api/auth/register',
        //     {
        //         headers: {
        //             'Authorization': localStorage.getItem('token')
        //         }

        //     })

        //     .then(res => {
        //         console.log(res);
        //         console.log(res.data);
        //     })
        let config = {
            method: 'POST',
            url: 'http://localhost:5000/api/auth/register',
            headers: {
                'Authorization': localStorage.getItem('token')
            },
            data:user
        }
        axios(config).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err.response)
        })
    }
    render() {
        return (
            <div>
                <div>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                        Tạo Thời Khóa Biểu
                    </button>

                    <div className="modal" id="myModal">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h4 className="modal-title">Tạo Thời Khóa biểu</h4>
                                    <button type="button" className="close" data-dismiss="modal">×</button>
                                </div>

                                <div className="modal-body">
                                    <form >
                                        <div className="form-group">
                                            <label htmlFor="name" className="col-form-label">Lớp:</label>
                                            <input type="text" name="classId" className="form-control" id="classId" onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message-text" className="col-form-label">Khóa Học:</label>
                                            <input type="text" className="form-control" id="courseId" name="courseId" onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message-text" className="col-form-label">Ngày:</label>
                                            <input type="text" className="form-control" id="day" name="day" onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="col-form-label">Bắt Đầu:</label>
                                            <input type="password" className="form-control" id="start" name="start" onChange={this.handleChange} />
                                        </div><div className="form-group">
                                            <label htmlFor="message-text" className="col-form-label">Kết Thúc:</label>
                                            <input type="password" className="form-control" id="end" name="end" onChange={this.handleChange} />
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

export default AddTimetable;