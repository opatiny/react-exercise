import PropTypes from 'prop-types';
import React, { Component } from 'react';

import TodoItem from './TodoItem';

class Todos extends Component {
  markComplete = () => {
    console.log('HEY');
  };

  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
      />
    ));
  }
}

// here we precise the type of todos
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};

export default Todos;
