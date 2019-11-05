import React from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [{item:'buy milk'},{item: 'see doctor'}]
        };
        this.addItem = this.addItem.bind(this);

    }
    addItem(newItem) {
        e.preventDefault();
        this.setState({ todos: [...this.state.todos, newItem] })
        console.log(this.state.todos);
    }
    render() {
        const todos = this.state.todos.map(todoItem => {
            return <TodoItem item={todoItem.item} />
        });
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