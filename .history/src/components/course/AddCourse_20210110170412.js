import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import DatePicker from 'react-date-picker';
class AddCourses extends Component {
    state = {
        name: '',
        subject: '',
        semester: '',
        startDate: '',
        endDate:''
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
        const course = {
            name: this.state.name,
            subject: this.state.subject,
            semester: this.state.semester,
            startDate: this.state.startDate,
            endDate: this.state.endDate,

        };
        
        console.log(JSON.stringify(course) + "==>", localStorage.getItem('token'));
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
            url: 'http://localhost:5000/api/course/create',
            headers: {
                'Authorization': localStorage.getItem('token')
            },
            data:course
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
                        Tạo Khóa Học
                    </button>

                    <div className="modal" id="myModal">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h4 className="modal-title">Tạo Khóa Học</h4>
                                    <button type="button" className="close" data-dismiss="modal">×</button>
                                </div>

                                <div className="modal-body">
                                    <form >
                                        <div className="form-group">
                                            <label htmlFor="name" className="col-form-label">Tên Khóa Học:</label>
                                            <input type="text" name="name" className="form-control" id="name" onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message-text" className="col-form-label">Môn Học:</label>
                                            <input type="text" className="form-control"  name="subject"  onChange={this.handleChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message-text" className="col-form-label">Kiểm Tra:</label>
                                            <input type="text" className="form-control"  name="semester" onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message-text" className="col-form-label">Ngày Bắt Đầu:</label>
                                            <DatePicker
                                                style={{ width: 300, borderRadius: '5px' }}
                                                format={"DD-MM-YYYY"}
                                                name="startDate"
                                                placeholder={'Ngày/tháng/năm'}
                                                value={this.state.startDate && moment(this.state.startDate) || ''}
                                                onChange={(e) => this.onChangeDate(e)}
                                            />
                                        </div> 
                                        <div className="form-group">
                                            <label htmlFor="message-text" className="col-form-label">Ngày Kết Thúc:</label>
                                            <DatePicker
                                                style={{ width: 300, borderRadius: '5px' }}
                                                format={"DD-MM-YYYY"}
                                                name="startDate"
                                                placeholder={'Ngày/tháng/năm'}
                                                value={this.state.startDate && moment(this.state.startDate) || ''}
                                                onChange={(e) => this.onChangeDate(e)}
                                            />
                                        </div> 
                                        {/* <div className="form-group">
                                            <label htmlFor="password" className="col-form-label">Ngày Bắt Đầu:</label>
                                            <input type="password" className="form-control"  name="startDate"  />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message-text" className="col-form-label">Ngày Kết Thúc:</label>
                                            <input type="password" className="form-control"  name="endDate"  />
                                        </div> */}
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => this.handleSubmit()} >Thêm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default AddCourses;