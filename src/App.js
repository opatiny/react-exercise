import Debug from 'debug';
import React, { Component } from 'react';
// Router is what handles the different urls to different pages
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';

import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import About from './components/pages/About';

import './App.css';

const debug = Debug('App.js');

// no render method?

class App extends Component {
  state = {
    todos: [],
  };

  // Function that runs when the component is created
  componentDidMount() {
    debug('Main component mounted');
    const rawState = window.localStorage.getItem('data');
    if (rawState !== null) {
      this.setState(JSON.parse(rawState));
    }
    debug(this.state);
  }

  // Function that runs every time the component's state is modified
  componentDidUpdate() {
    debug('Component updated');

    if (this.state) {
      window.localStorage.setItem('data', JSON.stringify(this.state));
    }
    debug(this.state);
  }

  // Toggle the completed property of todos
  // using a callback in here (previousState) to respect eslint rules
  toggleCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  // Delete a todo
  // ... is called the spread operator, we used it instead of slice(0)
  // -> todos: [...previousState.todos.filter((todo) => todo.id !== id)],
  deleteTodo = (id) => {
    this.setState((previousState) => ({
      todos: previousState.todos.filter((todo) => todo.id !== id).slice(0),
    }));
  };

  // Add todo form
  addTodo = (title) => {
    let newTodo = {
      id: uuidV4(),
      epoch: Date.now(),
      title,
      completed: false,
    };
    this.setState((previousState) => {
      let newTodos = previousState.todos.slice(0);
      newTodos.push(newTodo);
      return { todos: newTodos };
    });
  };

  // <Todos />  allows to embed the Todos component in the app
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={() => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    toggleCompleted={this.toggleCompleted}
                    deleteTodo={this.deleteTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
