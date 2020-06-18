import React, { Component } from 'react';
import { retrieveAllTodos, deleteTodo } from '../AsyncApi/TodoDataService';
import { getLoggedInUserName } from '../Authentication/AuthenticationService';
import moment from 'moment';

class Todos extends Component {

    state = {
        todos: [],
        message: null
    }

    componentDidMount() {
        retrieveAllTodos(getLoggedInUserName)
            .then(response => {
                this.setState({ todos: response.data })
            });
    }

    render() {

        const refreshTodos = () => {
            let username = getLoggedInUserName()
            retrieveAllTodos(username)
                .then(
                    response => {
                        this.setState({ todos: response.data })
                    }
                )
        }

        const deleteTodoClicked = (id) => {
            let username = getLoggedInUserName()
            deleteTodo(username, id)
                .then(
                    response => {
                        this.setState({ message: `Delete of todo ${id} Successful` })
                        refreshTodos()
                    }
                )
        }

        const updateTodoClicked = (id) => {

            this.props.history.push(`/todos/${id}`);
        }

        const addTodoClicked = () => {
            
            this.props.history.push(`/todos/-1`);
        }

        return (
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>description</th>
                                <th>Target Date</th>
                                <th>Is Completed?</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todos.map(
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td><button className="btn btn-success" onClick={() => updateTodoClicked(todo.id)}>Update</button></td>
                                        <td><button className="btn btn-warning" onClick={() => deleteTodoClicked(todo.id)}>Delete</button></td>
                                    </tr>
                            )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <button onClick={() => addTodoClicked()} className="btn btn-success">ADD</button>
                    </div>
                </div>
            </div>
        )
    }
};

export default Todos;