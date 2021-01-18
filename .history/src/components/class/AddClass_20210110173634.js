import React, { Component } from 'react';
import axios from 'axios';

class AddClass extends Component {
    state = {
        name: '',
        startDate: '',
        endDate: ''
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
        //console.log(this.state.name);
        // event.preventDefault();
        console.log('12334')
        const clas = {
            name: this.state.name,
            startDate: this.state.startDate,
            endDate: this.state.endDate

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
            console.log(res)
        }).catch(err => {
            console.log(err.response)
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
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message-text" className="col-form-label">Ngày Bắt Đầu:</label>
                                            <input type="date" name="startDate" min="1000-01-01"
                                              max="3000-12-31" className="form-control" onChange={this.handleChange} />
                                        </div>   
                                        
                                        <div className="form-group">
                                            <label htmlFor="message-text" className="col-form-label">Ngày Kết Thúc:</label>
                                            <input type="date" name="endDate" min="1000-01-01"
                                              max="3000-12-31" className="form-control" onChange={this.handleChange} />
                                        </div> 
                                       
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

export default AddClass;