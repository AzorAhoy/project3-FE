import React, { Component } from 'react';
import axios from 'axios';
import InfoClass from './InfoClass';
class ListClass extends Component {
    state = {
        class: ''
    }
    // var teachers =[];
    callAPI = async () => {
        const res = await axios.get('http://localhost:5000/api/class/', {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
        if (res.status === 200) {
             await this.setState({
                ...this.state,
                class: res.data.data
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
                            <th>Tên Lớp</th>
                            <th>Ngày Bắt Đầu</th>
                            <th>Ngày Kết Thúc</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showClass()}
                    </tbody>
                </table>
            </div>
            
        );
    }
    showClass() {
        if (this.state.class.length > 0) {
            let show = this.state.class.map((clas, index) => {
                return (
                    <tr key={index}>
                        <th scope="row">{index}</th>
                        <td>{clas.name}</td>
                        <td>{clas.startDate}</td>
                        <td>{clas.endDate}</td>
                        <td >
                            <InfoClass />
                            {/* <button type="button" className="btn btn-info">Chi Tiết <i className="fas fa-pencil-alt" /> </button> */}
                            <button type="button" className="btn btn-warning">Xóa</button>
                            
                        </td>
                    </tr>
                );

            });

            return show;
        }
    }
}

export default ListClass;