import React from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
//import uuid from 'uuid';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [ ]
        };
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);

    }
    addItem(newItem) {
        this.setState({ todos: [...this.state.todos, newItem] })
        console.log(this.state.todos);
    }
    removeItem(id) {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        })
    }
    render() {
        const todos = this.state.todos.map(todoItem => {
            return <TodoItem 
            key = {todoItem.id} 
            item = {todoItem.item}
            remove = {this.removeItem}
            id = {todoItem.id}
            />
        });
        //const wholeItem = this.state.todos
        return (
            <div>
                <h1>What you wanna do?</h1>
                <TodoForm addItem={this.addItem} />
                <ul>
                    {todos}
                </ul>


            </div>
        )
    }
}

export default TodoList;