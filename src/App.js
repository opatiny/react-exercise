import React, {Component} from 'react';
import Todos from './components/Todos';

import './App.css';

// no render method?

// <Todos />  allows to embed the Todos component in the app

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'sew a skirt',
        completed: false
      },
      {
        id: 2,
        title: 'make frozen yogurt',
        completed: true
      },
      {
        id: 3,
        title: 'go running',
        completed: false
      },
    ]
  }
  markComplete = () => {
    console.log('From App.js')
  }
  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete}/> 
      </div>
    );
  }
}
export default App;
