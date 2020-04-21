import React, { useState, useEffect } from 'react';
// Router is what handles the different urls to different pages
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';

import Header from './components/layout/Header';
import About from './components/pages/About';
import AddTodo from './components/todos/AddTodo';
import Todos from './components/todos/Todos';

import './App.css';

// no render method?

export default function App() {
  const [state, setState] = useState({
    todos: [],
  });

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const rawState = window.localStorage.getItem('data');
    if (state.todos === [] && rawState !== null) {
      setState(JSON.parse(rawState));
    }

    if (state) {
      window.localStorage.setItem('data', JSON.stringify(state));
    }
  }, [state]);

  // Toggle the completed property of todos
  // using a callback in here (previousState) to respect eslint rules
  function toggleCompleted(id) {
    setState({
      todos: state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  }
  // Delete a todo
  // ... is called the spread operator, we used it instead of slice(0)
  // -> todos: [...previousState.todos.filter((todo) => todo.id !== id)],
  function deleteTodo(id) {
    setState((previousState) => ({
      todos: previousState.todos.filter((todo) => todo.id !== id).slice(0),
    }));
  }

  // Add todo form
  function addTodo(title) {
    let newTodo = {
      id: uuidV4(),
      epoch: Date.now(),
      title,
      completed: false,
    };
    setState((previousState) => {
      let newTodos = previousState.todos.slice(0);
      newTodos.push(newTodo);
      return { todos: newTodos };
    });
  }

  // <Todos />  allows to embed the Todos component in the app
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
                <AddTodo addTodo={addTodo} />
                <Todos
                  todos={state.todos}
                  toggleCompleted={toggleCompleted}
                  deleteTodo={deleteTodo}
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
