import React, { Component } from 'react';
import axios from 'axios';
class ProfileUser extends Component {
    constructor (props) {
        super(props);
        this.state = {
          Datas: []
        }
      };
      // componentDidMount() {
      //   axios.get('http://localhost:5000/api/user/')
      //     .then(res => {
      //       const Datas = res.data;
      //       this.setState({ Datas });
      //     })
      // }
      callAPI = async () => {
        // const res = await axios.get('http://localhost:5000/api/user/', {
        //     headers: {
        //         'Authorization': localStorage.getItem('token')
        //     }
        // })
        // if (res.status === 200) {
        //     await this.setState({
        //         ...this.state,
        //         Datas: res.data.data
        //     })
        // }
        console.log('12334')
        const Datas = {
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
            url: 'http://localhost:5000/api/auth/user/:id',
            headers: {
                'Authorization': localStorage.getItem('token')
            },
            data:Datas
        }
        axios(config).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err.response)
        })
    }
    componentDidMount() {
        this.callAPI()
    }
    //   componentDidMount() {
    //     axios.get('http://localhost:5000/api/user/:id/update')
    //          .then(res => {
    //             const Users = res.data;
    //             this.setState({ Users: Users.User });
    //             console.log(" Users.User")
    //           })
    //          .catch(error => console.log(error));
    //   };
    
    //   componentWillMount() {
    //     Modal.setAppElement('body');
    //   };
    
    render() {
        return (
            <div>
                <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal"  onClick={() => {
                        

                        console.log("props   ", JSON.stringify(this.props));
                        console.log("state   ", JSON.stringify(this.state));
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
                           {
                              this.state.Datas.map(Data => {
                                // return  <div className="modal-body">
                                //             <form >
                                //                   <div className="form-group">
                                //                               <label htmlFor="name" className="col-form-label">Tên Người Dùng:</label>
                                //                               <input type="text" name="name" className="form-control" id="name" {this.state.Data.name} />
                                //                   </div>
                                //                   <div className="form-group">
                                //                               <label htmlFor="message-text" className="col-form-label">Email:</label>
                                //                               <input type="text" className="form-control" id="email" name="email" {Data.email} />
                                //                   </div>
                                //                   <div className="form-group">
                                //                               <label htmlFor="message-text" className="col-form-label">Vai Trò:</label>
                                //                               <input type="text" className="form-control" id="role" name="userRole" {Data.role} />
                                //                   </div>
                                //                   <div className="form-group">
                                //                               <label htmlFor="password" className="col-form-label">Password:</label>
                                //                               <input type="password" className="form-control" id="password" name="password"  />
                                //                   </div>
                                              
                                //             </form>
                                //         </div>
                              })
                            }
                        {/* <div className="modal-body">
                            <form >
                                  <div className="form-group">
                                              <label htmlFor="name" className="col-form-label">Tên Người Dùng:</label>
                                              <input type="text" name="name" className="form-control" id="name" value={this.state.name} />
                                  </div>
                                  <div className="form-group">
                                              <label htmlFor="message-text" className="col-form-label">Email:</label>
                                              <input type="text" className="form-control" id="email" name="email" value={this.state.email} />
                                  </div>
                                  <div className="form-group">
                                              <label htmlFor="message-text" className="col-form-label">Vai Trò:</label>
                                              <input type="text" className="form-control" id="role" name="userRole" value={this.state.role} />
                                  </div>
                                  <div className="form-group">
                                              <label htmlFor="password" className="col-form-label">Password:</label>
                                              <input type="password" className="form-control" id="password" name="password"  />
                                  </div>
                               
                            </form>
                        </div> */}
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

export default ProfileUser;