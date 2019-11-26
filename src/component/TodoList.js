import React from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';


class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: []
        };
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.getTodos = this.getTodos.bind(this);
        this.updateDone = this.updateDone.bind(this);
    }
    componentDidMount() {
        
        this.getTodos();
    }
    
    getTodos() {
        
        fetch('http://localhost:3001/todos')
            .then(res => res.json())
            .then(todos => this.setState({ todos: todos }))
            .then(console.log(this.state.todos));

    }
    addItem(newItem) {
        console.log(newItem)
        fetch(`http://localhost:3001/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)

        })
            .then(response => response.json())
            .then(() => this.getTodos()

            )
        //this.setState({ todos: [...this.state.todos, newItem] })
        //return response.json();
        //console.log(this.state.todos);
    }

    removeItem(id) {
        fetch(`http://localhost:3001/todos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },

        })
            .then(() => this.getTodos());
    }
    /* removeItem(id) {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        })
    } */
    updateItem(id, updateItem) {
        console.log(updateItem)
        const newTodo = { item: updateItem }
        fetch(`http://localhost:3001/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTodo)
        })

            .then(response => response.json())
            /* .then(json => {
                console.log(json)
                this.setState({
                    todos :json
                    //Body.json() is a function that reads the response stream to completion and parses 
                    //the response as json. This operation may take take time, so instead of just returning the json, it returns another Promise . 
                });
            }) */
            .then(() => this.getTodos())

    }
    updateDone(id, done) {
        console.log(done);
        const newDone = { isDone: !done };
        fetch(`http://localhost:3001/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newDone)
        })
            
            .then(response => response.json())
            .then(() => this.getTodos());

    }
    render() {
        const todos = this.state.todos.map(todoItem => {
            return <TodoItem
                key={todoItem.id}
                item={todoItem.item}
                id={todoItem.id}
                isDone={todoItem.isDone}
                remove={this.removeItem}
                update={this.updateItem}
                updateDone={this.updateDone}
            />
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