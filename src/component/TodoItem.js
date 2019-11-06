import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            item: this.props.item
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    handleRemove() {
        this.props.remove(this.props.id);
    }
    toggleEdit() {
        //this.props.edit(this.props.id)
        this.setState({ isEditing: !this.state.isEditing })
    }
    handleChange(e) {
        this.setState({ item: e.target.value })
    }
    handleUpdate(e) {
        e.preventDefault();
        this.props.update(this.props.id, this.state.item)
        this.setState({isEditing: false})
    }
    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div>
                    <form onSubmit={this.handleUpdate}>
                        <input value={this.state.item} onChange={this.handleChange} type='text' />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div>
                    <button onClick={this.toggleEdit}>Edit</button>
                    <button onClick={this.handleRemove}>X</button>
                    <li>{this.props.item}</li>
                </div>
            )

        }

        return result;

    }
}

export default TodoItem;