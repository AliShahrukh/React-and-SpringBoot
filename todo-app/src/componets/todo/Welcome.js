import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {

    state = {
        welcomeMessage: ''
    }
    render() {

        return (
            <div>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {(this.props.match.params.name).toUpperCase()}. 
                    You can manage your todos <Link to="/todos">here</Link>.
                </div>
            </div>
        );
    }
};

export default Welcome;