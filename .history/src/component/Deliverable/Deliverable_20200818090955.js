import React, { Component } from 'react';

class Deliverable extends Component {
    render() {
        return (
            <h1> Hello {this.props.message}! </h1>
        );
    }
}

export default Deliverable;
ReactDOM.render(
    <Hello message="my friend" />  
);