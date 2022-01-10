import React from 'react';
import { render } from 'react-dom';

class ListForm extends React.Component {
    constructor(){
        super();
        this.state = {
            input: ""
        }
    }


handleChange = e => {
    this.setState({
        ...this.state,
        input: e.target.value
    })
};

handleSumbit = e => {
    e.preventDefault();
    this.props.handleAddItem(this.state.input)
}

render() {
    return (
        <form onSubmit={this.handleSumbit}>
        <input onChange={this.handleChange} type="text" name="item" />
        <button>Add Task</button>            
        </form>
    );
}
}

export default ListForm;