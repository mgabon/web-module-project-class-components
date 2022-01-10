import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';
// import TodoList from './components/TodoList'
// import Todo from './components/Todo'

const toDoList = [
  {
  task: 'Wash car',
  id: 1234,
  completed: false
},
{
  task: 'Grocery shop',
  id: 4123,
  completed: false
}
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      toDoList: toDoList
    }
  }

  //Clear List
handleClearTasks = () => {
  this.setState({
    ...this.state,
    toDoList: this.state.toDoList.filter(item => {
      return !item.completed
    })
  });
}

// Add item
handleAddItem = (itemName) => {
  const newItem = {
    task: itemName,
    id: Date.now(),
    completed: false
  }
  this.setState({
    ...this.state,
    toDoList: [...this.state.toDoList, newItem]
  })
}

//Toggle Task
handleToggleItem = (selectedItem) => {
  this.setState({
    ...this.state,
    toDoList: this.state.toDoList.map(item => {
      if(item.id === selectedItem.id){
        return ({
          ...item,
          completed: !item.completed
        })
      } else {
        return item;
      }
    })
  })
}

  render() {
    return (
      <div className='App'>
        <div className='header'>
        <h1>Todo App!</h1>
        <TodoForm handleAddItem={this.handleAddItem} />
        </div>
        <TodoList handleToggleItem={this.handleToggleItem} toDoList={this.state.toDoList} />
        <button onClick={this.handleClearTasks} className='clear'>Clear Tasks</button>
      </div>
    );
  }
}

export default App;
