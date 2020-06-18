import axios from 'axios';

export const retrieveAllTodos = (name) => {

    return axios(`http://localhost:8080/users/${name}/todos`);
};

export const deleteTodo = (name, id) => {

    return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
};

export const retrieveTodo = (name, id) => {

    return axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
};

export const updateTodo = (name, id, todo) => {

    return axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo);
};

export const createTodo = (name, todo) => {

    return axios.post(`http://localhost:8080/users/${name}/todos/`, todo);
}