import React, { Component } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

class ModalUser extends Component {
  constructor (props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      news: []
    }
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/user/')
         .then(res => {
            const news = res.data;
            this.setState({ news: news.news });
          })
         .catch(error => console.log(error));
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  componentWillMount() {
    Modal.setAppElement('body');
  };

  openModal = (item) => {
    this.setState({
      modalIsOpen: true,
      id: item.id,
      title: item.title,
      description: item.description,
      content: item.content
    });
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    });
  };

  render() {
    return(
      <div>
        <ul>
          {this.state.news.map(item => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <div>{item.description}</div>
               <button onClick={() => this.openModal(item)}>Edit</button>
            </li>
          ))}
        </ul>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}>
          <button onClick={this.closeModal}>Close</button>
          <form>
            <table>
              <tbody>
                <tr>
                  <th><label>Title</label></th>
                  <td>
                    <input
                      type="text"
                      name="title"
                      value={this.state.title} />
                  </td>
                </tr>

                <tr>
                  <th><label>Description</label></th>
                  <td>
                    <textarea
                      name="description"
                      value={this.state.description} />
                  </td>
                </tr>

                <tr>
                  <th><label>Content</label></th>
                  <td>
                    <textarea
                      name="content"
                      value={this.state.content} />
                  </td>
                </tr>
              </tbody>
            </table>
            <button type="submit">Edit</button>
          </form>
        </Modal>
      </div>
    )
  }
};

export default ModalUser;