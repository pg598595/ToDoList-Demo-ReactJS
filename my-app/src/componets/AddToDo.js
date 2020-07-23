import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddToDo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''})
    }
    onChange = (e) => this.setState({title: e.target.value});
    render() {
        return (
            <form style={{display:'flex'}} onSubmit={this.onSubmit}>
                <input type="text" 
                name="title" 
                value={this.state.title}
                onChange={this.onChange}
                style={{flex:'10',padding: '5px',}}
                placeholder="Add To do Task"/>
                <input
                type = "submit"
                value = "Submit"
                className="btn"
                style={{flex:'1'}}
                />
            </form>
        )
    }
}

// PropTypes
AddToDo.prototypes = { 
    addTodo: PropTypes.func.isRequired,
}

export default AddToDo
