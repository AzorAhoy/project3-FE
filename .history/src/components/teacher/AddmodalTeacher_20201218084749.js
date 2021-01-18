import React, { Component } from 'react';

class AddmodalTeacher extends Component {
    state = {
        name: '',
        email: '',
        userRole: '',
        password: '',
        password2: ''
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
            email: this.state.email,
            userRole: this.state.userRole,
            password: this.state.password,
            password2: this.state.password2,

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
                        Thêm Giáo Viên
                    </button>
                    
                    <div className="modal" id="myModal">
                        <div className="modal-dialog">
                        <div className="modal-content">
                            
                            <div className="modal-header">
                            <h4 className="modal-title">Thêm Giáo Viên</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="name" className="col-form-label">Tên Giáo Viên:</label>
                                        <input type="text" className="form-control" id="name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">Email:</label>
                                        <input type="text" className="form-control" id="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">Ngày Tạo:</label>
                                        <input type="text" className="form-control" id="role" />
                                    </div>
                                </form>

                            </div>
                            
                            <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Thêm</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default AddmodalTeacher;