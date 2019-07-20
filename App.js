import React from 'react';
import TodoList from './components/TodoList.js';
import AddTodo from './components/AddTodo.js';

class App extends React.Component {
  state = {
    todolist: []
  }

componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
    .then(res => res.json())
     .then(data => this.setState( {
       todolist: data
     }))
  }
 
handleDelete = id => {
    const todolist = this.state.todolist.filter(todo => todo.id !== id);
    this.setState( { todolist} );
    
  }
  handleAdd = (title) => {
    postData('https://jsonplaceholder.typicode.com/todos', {title, completed: false})
  .then(data => this.setState( { todolist: [...this.state.todolist, data] }))
  .catch(error => console.error(error));
  
  function postData(url = '', data = {}) {
      return fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          }, 
          body: JSON.stringify(data),
      })
      .then(response => response.json()); 
  }
}
  handleChange = (id) => {
    const todolist = this.state.todolist.map(todo => {
      if (todo.id === id)
        todo.completed = !todo.completed;
      return todo;
    })
    this.setState({
      todolist
    });
  }
  render() {
    return ( <div>
      <
      AddTodo toadd = {
        this.handleAdd
      }
      /> <
      TodoList todolist = {
        this.state.todolist
      }
      onDelete = {
        this.handleDelete
      }
      onChange = {
        this.handleChange
      }
      /> </div>
    );
  }
}

export default App;
