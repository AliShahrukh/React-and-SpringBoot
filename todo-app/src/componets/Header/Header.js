import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { isUserLoggedIn, logout } from '../Authentication/AuthenticationService';

class Header extends Component {
    render() {

        const isUserLogged = isUserLoggedIn();

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="/" className="navbar-brand" onClick={logout}>Todo</a></div>
                    <ul className="navbar-nav">
                        {isUserLogged && <li><Link className="nav-link" to="/welcome/ali">Home</Link></li>}
                        {isUserLogged && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLogged && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLogged && <li><Link className="nav-link" to="/logout" onClick={logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        );
    }
};

export default withRouter(Header);