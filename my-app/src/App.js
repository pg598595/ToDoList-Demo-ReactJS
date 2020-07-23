import React, { Component } from 'react';
import './App.css';
import './componets/Todos'
import Todos from './componets/Todos';
import Header from'./componets/layout/header';
import AddToDo from'./componets/AddToDo';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import About from './componets/pages/About';
import Axios from 'axios';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    .then(res => this.setState({
      todos: res.data
    })
    )
  }

  // Toogle complete task
  markComplete = (id) => {
    console.log("Mark Complete Task"+id);
    this.setState({
        todos: this.state.todos.map(todo => {
          if(todo.id === id){
              todo.completed = !todo.completed
          }
          return todo;
        })
    });
    }

  //Delete Todo Task
  deleteTodo = (id) => {
    console.log("Delete Task"+id);

    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => {
      this.setState({

        todos: [...this.state.todos.filter(todo=>
          todo.id!==id
        )]
    });
    })

    
    } 

    //Add To Do Task
    addTodo =(title) =>{
      console.log("Add New Task"+title);

      Axios.post('https://jsonplaceholder.typicode.com/todos',{
        title,
        completed:false
      }).then(res => this.setState({todos: [...this.state.todos,res.data]}))
      
    }
  render(){
    console.log(this.state.todos)
    return (
      <Router>
          <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddToDo addTodo={this.addTodo}/>
              <Todos 
              todos={this.state.todos} 
              markComplete={this.markComplete}
              deleteTodo={this.deleteTodo}
              />
            </React.Fragment>
          )} />
          <Route path="/about" component={About}/>
          
        </div>
        </div>
      </Router>
  
    );
  }
}

export default App;
