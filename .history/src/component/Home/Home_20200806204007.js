import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
            <h1>Small Grid</h1>
            <p>The following example will result in a 25%/75% split on small, medium, large and xlarge devices (<strong>576px and above</strong>). On extra small devices, it will stack (100% width).</p>
            <p>Resize the browser window to see the effect.</p>
            <div className="container-fluid">
                <div className="row">
                <div className="col-sm-3 bg-success">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br />
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <div className="col-sm-9 bg-warning">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </div>
                </div>
            </div>
            </div>

        );  
    }
}

export default Home;