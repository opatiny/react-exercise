import PropTypes from 'prop-types';
import React from 'react';

import TodoItem from './TodoItem';

export default function Todos(props) {
  return props.todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      toggleCompleted={props.toggleCompleted}
      deleteTodo={props.deleteTodo}
    />
  ));
}

// here we precise the type of todos
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
};
