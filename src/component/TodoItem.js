import React, { Component } from 'react';
import './TodoItem.css'
class TodoItem extends Component {
    constructor(props){
        super(props);
        this.handleRemove= this.handleRemove.bind(this);

<<<<<<< HEAD
        this.state = {
            isEditing: false,
            item: this.props.item,
            isDone: this.props.isDone
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleDone = this.handleDone.bind(this);
=======
>>>>>>> parent of b719f42... editItem completed
    }
    handleRemove(){
        this.props.remove(this.props.id);
    }
<<<<<<< HEAD
    toggleEdit() {
        
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
    handleDone(e) {
        this.props.updateDone(this.props.id, this.state.isDone)
        this.setState({isDone:!this.state.isDone})
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
                    <li className={this.props.isDone? 'line' :null}
                        onClick= {this.handleDone}>
                        {this.props.item}
                        </li>
                </div>
            )

        }

        return result;

=======
    render() {
        
        return (
            <div>
                <button>Edit</button>
                <button onClick={this.handleRemove}>X</button>
                <li>{this.props.item}</li>
            </div>
        )
>>>>>>> parent of b719f42... editItem completed
    }
}

export default TodoItem;