import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        return (
            <div>
                <button>Edit</button>
                <button>X</button>
                <li>{this.props.item}</li>
            </div>
        )
    }
}

export default TodoItem;