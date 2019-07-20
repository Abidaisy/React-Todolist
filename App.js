import React from 'react';
import TodoList from './components/TodoList.js';
import AddTodo from './components/AddTodo.js';

class App extends React.Component {
  state = {
    todolist: [
      // {
      //   id: "1",
      //   title: "see tutorial",
      //   completed: false
      // },
      // {
      //   id: "2",
      //   title: "learn tutorial",
      //   completed: false
      // },
      // {
      //   id: "3",
      //   title: "practice tutorial",
      //   completed: false
      // }
    ]
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
    .then(res => res.json())
     .then(data => this.setState( {
       todolist: data
     }))
  }
  
  handleDelete = id => {
    // console.log(id);
    // fetch('https://jsonplaceholder.typicode.com/todos',
    // {
    //     method: "DELETE",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({id:id})
    // })
    const todolist = this.state.todolist.filter(todo => todo.id !== id);
    this.setState( { todolist} );
    
  }
  handleAdd = (title) => {
    // const added = {
    //   id: "4",title,completed: false
    // }
    postData('https://jsonplaceholder.typicode.com/todos', {title, completed: false})
  .then(data => this.setState( { todolist: [...this.state.todolist, data] }))// JSON-string from `response.json()` call
  .catch(error => console.error(error));
  
  function postData(url = '', data = {}) {
    // Default options are marked with *
      return fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors', // no-cors, cors, *same-origin
          cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
              'Content-Type': 'application/json',
              // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: 'follow', // manual, *follow, error
          referrer: 'no-referrer', // no-referrer, *client
          body: JSON.stringify(data), // body data type must match "Content-Type" header
      })
      .then(response => response.json()); // parses JSON response into native JavaScript objects 
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
