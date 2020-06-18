import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Error extends Component {
    render() {
        return (
            <div>
                Error Occured.<br/>
                Go back to <Link to="/login">Login</Link> page.
            </div>
        );
    }
};

export default Error;