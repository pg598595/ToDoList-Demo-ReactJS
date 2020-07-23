import React from 'react';
import {Link} from 'react-router-dom'
export default function header() {
    return (
        <header style={headerStyle}>
            <h1>To Do List</h1>
            <Link style = {linkStyle}
            to="/">Home</Link> | <Link style = {linkStyle} to="/about">About</Link>
        </header>
    )
}
const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlgin: 'center',
    padding: '11px'

}

const linkStyle = {
    color: '#fff',
    textDecoration:'none'
}