import React, { Component } from 'react';
import TodoApp from './componets/todo/TodoApp';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './bootstrap.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <TodoApp />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
