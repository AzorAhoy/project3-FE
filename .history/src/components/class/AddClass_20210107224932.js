import React, { Component } from 'react';

class AddClass extends Component {
    state = {
        name: '',
        startDate: '',
        endDate: ''
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
            name: this.state.name,
            startDate: this.state.startDate,
            endDate: this.state.endDate

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
                                            <input type="text" name="name" className="form-control" id="name" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message-text" className="col-form-label">Ngày Bắt Đầu</label>
                                            <input type="text" className="form-control" id="startDate" name="startDate"  />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message-text" className="col-form-label">Ngày Kết Thúc:</label>
                                            <input type="text" className="form-control" id="endDate" name="endDate"  />
                                        </div>
                                        {/* <div className="form-group">
                                            <label htmlFor="password" className="col-form-label">Password:</label>
                                            <input type="password" className="form-control" id="password" name="password"  />
                                        </div><div className="form-group">
                                            <label htmlFor="message-text" className="col-form-label">Nhập lại Password:</label>
                                            <input type="password" className="form-control" id="password2" name="password2"  />
                                        </div> */}
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary" data-dismiss="modal" >Thêm</button>
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