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
        fetch(`http://localhost:3001/todos`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
           body :JSON.stringify(newItem)
        })
        .then(() => this.getTodos())
        //this.setState({ todos: [...this.state.todos, newItem] })
        //return response.json();
        //console.log(this.state.todos);
    }
    removeItem(id) {
        fetch(`http://localhost:3001/todos/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(() => this.getTodos());
      }
    /* removeItem(id) {
        this.setState({
            todos: this.state.todos.filter(t => t.id !== id)
        })
    } */
    updateItem(id, updateItem) {
        const updateTodos = this.state.todos.map(todo => {
            if (todo.id === id) {

                return { ...todo, item: updateItem }
            }
            return todo;
        });
        this.setState({ todos: updateTodos })
    }
    render() {
        const todos = this.state.todos.map(todoItem => {
            return <TodoItem
                key={todoItem.id}
                item={todoItem.item}
                id={todoItem.id}
                remove={this.removeItem}
                update={this.updateItem}
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