import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
class AddClass extends Component {
    state = {
        name: '',
        startDate: '',
        endDate: '',
        errors: [],
    }

    handleChange = (event) => {
        console.log(event.target.value)
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value,

        });

    }
    onChangeDate = (e) => {
        console.log(e.target.value);
        console.log(e.target.name);

    }

    handleSubmit = event => {
        console.log(this.state)
        //console.log(this.state.name);
        // event.preventDefault();
        console.log('12334')
        const clas = {
            name: this.state.name,
            // startDate: this.state.startDate,
            // endDate: this.state.endDate
            startDate: moment(this.state.startDate).format("YYYY/MM/DD"),
            endDate: moment(this.state.endDate).format("YYYY/MM/DD")
        };

        console.log(JSON.stringify(clas) + "==>", localStorage.getItem('token'));
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
            url: 'http://localhost:5000/api/class/create',
            headers: {
                'Authorization': localStorage.getItem('token')
            },
            data: clas
        }
        axios(config).then(res => {
            console.log(res);
            window.$("#myModal").modal("toggle");
        }).catch(error => {
            console.log(error.response);
            let errResp = error.response;
            console.log(errResp);
            alert(JSON.stringify(errResp.data));
            if (errResp.data) {
                this.setState({ errors: errResp.data });
            }
        })
    }
    render() {
        return (
            <div>
                <div>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                        Tạo Lớp Học
                    </button>

                    <div className="modal" id="myModal">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h4 className="modal-title">Tạo Lớp Học</h4>
                                    <button type="button" className="close" data-dismiss="modal">×</button>
                                </div>

                                <div className="modal-body">
                                    <form >
                                        <div className="form-group">
                                            <label htmlFor="name" className="col-form-label">Tên Lớp Học:</label>
                                            <input type="text" name="name" className="form-control" id="name" onChange={this.handleChange} />
                                            {this.state.errors.name && (
                                                <div className="text-danger">
                                                    {this.state.errors.name}
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message-text" className="col-form-label">Ngày Bắt Đầu:</label>
                                            <input type="date" className="form-control" name="startDate" onChange={this.handleChange} />
                                            {this.state.errors.startDate && (
                                                <div className="text-danger">
                                                    {this.state.errors.startDate}
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message-text" className="col-form-label">Ngày Kết Thúc:</label>
                                            <input type="date" className="form-control" name="endDate" onChange={this.handleChange} />
                                            {this.state.errors.endDate && (
                                                <div className="text-danger">
                                                    {this.state.errors.endDate}
                                                </div>
                                            )}
                                            {this.state.errors.inValidTime && (
                                                <div className="text-danger">
                                                    {this.state.errors.inValidTime}
                                                </div>
                                            )}
                                        </div>

                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" onClick={() => this.handleSubmit()} >Thêm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default AddClass;