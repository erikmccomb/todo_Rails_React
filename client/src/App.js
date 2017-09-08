import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  state = { todos: [] }
  
  componentDidMount() {
  }
  
  addItem = (name) => {
  }
  
  updateTodo =(id) => {
  } 
  
  deleteTodo =(id) => {
  }

  render() {
    return (
    <div class="container">
      <TodoForm  addItem={this.addItem}/>
      <TodoForm 
        todos ={this.state.todos}
        updateTodo={this.updateTodo}
        deleteTodo={this.deleteTodo}
      />
    </div>
    );
  }
}

export default App;
