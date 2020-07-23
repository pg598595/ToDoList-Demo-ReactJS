import React, { Component } from 'react';
import TodoItem from './ToDoItems'
import PropTypes from 'prop-types'

export class Todos extends Component {


    render(){
        return this.props.todos.map((todo)=>(
        <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo}/>
        ));
    }
}

//PropTypes
Todos.prototypes = { 
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired


}

export default Todos;