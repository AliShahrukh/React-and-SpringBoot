import React, { Component } from 'react';
import { registerSuccessfulLogin } from '../Authentication/AuthenticationService';

class Login extends Component {

    state = {
        username: '',
        password: '',
        hasLoginFailed: false,
        showSuccessMessage: false
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    loginHandler = () => {
        if (this.state.username === 'ali' && this.state.password === 'pass') {
            this.setState((prevState) => ({
                showSuccessMessage: !prevState.showSuccessMessage,
                hasLoginFailed: false
            }));
            registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`);
        } else {
            this.setState((prevState) => ({
                hasLoginFailed: !prevState.hasLoginFailed,
                showSuccessMessage: false
            }));
        }
    };

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.loginHandler();
        }
    }

    render() {
        const loginFailed = this.state.hasLoginFailed && "Login Failed ";
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    <div className="alert alert-warning">{loginFailed}</div>
                User Name: <input type="text" name="username"
                        value={this.state.username}
                        onChange={this.changeHandler}
                        onKeyPress={this.handleKeyPress}
                    />
                Password: <input type="password" name="password"
                        value={this.state.password}
                        onChange={this.changeHandler}
                        onKeyPress={this.handleKeyPress}
                    />
                    <button onClick={this.loginHandler} className="btn btn-success">Login</button>
                </div>
            </div>
        );
    }
}

export default Login;