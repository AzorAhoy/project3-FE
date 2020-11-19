import React, { Component } from 'react';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <div>
                <div className="card" style={{width: '400px'}}>
                    <img className="card-img-top" src="img_avatar1.png" alt="Card image" />
                    <div className="card-body">
                        <h4 className="card-title">John Doe</h4>
                        <p className="card-text">Some example text.</p>
                        <a href="#" className="btn btn-primary">See Profile</a>
                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default Dashboard;