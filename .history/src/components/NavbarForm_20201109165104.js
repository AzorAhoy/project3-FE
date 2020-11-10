import React, { Component } from 'react';

class NavbarForm extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <form className="form-inline" action="/action_page.php">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-success" type="submit">Search</button>
                    </form>
                    
                </nav>
                

            </>
        );
    }
}

export default NavbarForm;