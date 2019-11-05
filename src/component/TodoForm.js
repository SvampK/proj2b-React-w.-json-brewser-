import React, { Component } from 'react';
import uuid from 'uuid';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { item: '' }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.addItem({ ...this.state, id: uuid.v4() });
        console.log(this.state)
        this.setState({ item: '' })
    }
    handleChange(e) {
        this.setState({ item: e.target.value })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='input'>New Todo</label>
                    <input
                        type='text'
                        placeholder='New todo'
                        id='input'
                        value={this.state.item}
                        onChange={this.handleChange}
                    >
                    </input>
                    <button>+</button>
                </form>
            </div>
        );
    }
}
export default TodoForm;