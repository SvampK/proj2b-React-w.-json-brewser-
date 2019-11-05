import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.handleRemove= this.handleRemove.bind(this);

    }
    handleRemove(){
        this.props.remove(this.props.id);
    }
    render() {
        
        return (
            <div>
                <button>Edit</button>
                <button onClick={this.handleRemove}>X</button>
                <li>{this.props.item}</li>
            </div>
        )
    }
}

export default TodoItem;