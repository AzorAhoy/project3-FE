import React, { Component } from 'react';
import axios from 'axios';
class ProfileUser extends Component {
    constructor (props) {
        super(props);
        this.state = {
          id: []
        }
      };

      callAPI = async () => {
        const res = await axios.get('http://localhost:5000/api/user/:id', {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
        if (res.status === 200) {
            await this.setState({
                ...this.state,
                Users: res.data.data
            })
        }

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
    
      handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
      };
    
    //   componentWillMount() {
    //     Modal.setAppElement('body');
    //   };
    handleInsertSubmit = (event) => {
        event.preventDefault();
    
        const newItem = {
            id: '',
            title: this.state.title,
            description: this.state.description,
            content: this.state.content
        };
    
        axios.post('http://localhost:5000/api/user/:id/update', newItem)
          .then(res => {
            let news = this.state.news;
            news = [newItem,...news];
            this.setState({ news: news });
          })
          .catch(error => console.log(error));
      };
      handleEditSubmit = (event) => {
        event.preventDefault();
    
        const newUpdate = {
          id: this.state.id,
          title: this.state.title,
          description: this.state.description,
          content: this.state.content
      };
    
      axios.post('/api/edit', newUpdate)
        .then(res => {
          let key = this.state.id;
          this.setState(prevState => ({
            news: prevState.news.map(
              elm => elm.id === key? {
                ...elm,
                title: this.state.title,
                description: this.state.description,
                content: this.state.content
              }: elm
            )
          }))
        })
        .catch(error => console.log(error));
      };
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
                        <div className="modal-body">
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

export default ProfileUser;