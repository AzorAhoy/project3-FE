import React, { Component } from 'react';
import axios from 'axios';
import ProfileUser from './ProfileUser';
class ListUser extends Component {
    state = {
        users: ''
    }
    // var teachers =[];
    callAPI = async () => {
        const res = await axios.get('http://localhost:5000/api/user/', {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
        if (res.status === 200) {
            await this.setState({
                ...this.state,
                users: res.data.data
            })
        }

    }
    componentDidMount() {
        this.callAPI()
    }
    render() {
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên người dùng</th>
                            <th>Email</th>
                            <th>Vai trò</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showUsers()}
                    </tbody>
                </table>
            </div>
        );
    }
    showUsers() {
        if (this.state.users.length > 0) {
            let show = this.state.users.map((user, index) => {
              
                    return (
                        <tr key={index}>
                            <th scope="row">{index}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td >
                                <ProfileUser />
                                {/* <button type="button" className="btn btn-info">Chi Tiết </button> */}
                                <button type="button" className="btn btn-warning">Xóa</button>

                            </td>
                        </tr>
                    );
        

            });

            return show;
        }
    }

}
export default ListUser;