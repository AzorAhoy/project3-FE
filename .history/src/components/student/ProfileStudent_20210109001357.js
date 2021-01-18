import Axios from 'axios';
import React, { Component } from 'react';

class ProfileStudent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            studentInfo: "",
            name: "default",
            email: "default",
            createdAt: 'default',
            lastUpdate: ''
        }
    }

    async componentDidMount() {
        await this.setState({
            ...this.state,
            studentInfo: this.props.studentInfo,
            name: this.props.studentInfo.name,
            email: this.props.studentInfo.email,
            lastUpdate: this.props.studentInfo.lastUpdate
        })
        console.log("click", this.state);
        console.log("props   ", JSON.stringify(this.props));

    }
    getData = async () => {
        const res = await Axios.get('http://localhost:5000/api/student/', {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
    }
    handleChange = async (e) => {
        const { name, value } = e.target
        console.log(value + "==>" + name);
        this.setState({
            ...this.state,
            [name]: value
        })
    }
    handleClick = async () => {
        console.log(this.state);
    }
    render() {
        // console.log("props", this.props.studentInfo);

        return (
            <div>
                <div>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={() => {
                        this.handleClick()
                    }}>
                        Chi Tiết <i className="fas fa-pencil-alt" />
                    </button>

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
                                            <label htmlFor="name" className="col-form-label">Tên Học Viên:</label>
                                            <input type="text" name="name" className="form-control" id="name" value={this.state.name} onChange={(e) => {
                                                this.handleChange(e)
                                            }} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message-text" className="col-form-label">Email:</label>
                                            <input type="text" className="form-control" id="email" name="email" value={this.state.email} onChange={(e) => {
                                                this.handleChange(e)
                                            }} />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="creatAt" className="col-form-label">Ngày Tạo:</label>
                                            <input type="datetime" className="form-control" id="creatAt" name="creatAt" value={this.state.lastUpdate} onChange={(e) => {
                                                this.handleChange(e)
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
            </div>
        );
    }
}

export default ProfileStudent;