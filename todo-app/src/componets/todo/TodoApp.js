import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../Login/Login';
import Welcome from './Welcome';
import Error from './Error';
import Todos from './Todos';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Logout from '../Login/Logout';
import AuthenticatedRoute from '../Authentication/AuthenticatedRoute';
import UpdateTodo from '../todo/UpdateTodo';

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Header />
                <Switch>
                    <Route path="/login" exact component={Login} />
                    <AuthenticatedRoute path="/welcome/:name" exact component={Welcome} />
                    <AuthenticatedRoute path="/todos" exact component={Todos} />
                    <AuthenticatedRoute path="/logout" exact component={Logout} />
                    <AuthenticatedRoute path="/todos/:id" exact component={UpdateTodo} />
                    <Redirect from="/" to="/login" />
                    <Route component={Error} />
                </Switch>
                <Footer />
            </div>
        );
    }
};

export default TodoApp;