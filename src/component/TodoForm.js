import React, { Component } from 'react';


class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { input: '' }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({ input: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.addItem(this.state);
        console.log(this.state)
        this.setState({input: ''})
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
                        value={this.state.input}
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