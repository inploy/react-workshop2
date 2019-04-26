import React, { Component } from 'react';
import Header from './components/Header';
import CompletedSection from './components/CompletedSection';
import List from './components/List';
import './App.css';


class App extends Component {
  state = {
    list: [

      {
        title: 'Task1',
        isCompleteed: true,

      },
      {
        title: 'Task2',
        isCompleteed: true,

      },
      {
        title: 'Task3',
        isCompleteed: false,

      },
      {
        title: 'Task4',
        isCompleteed: false,

      },

    ]
  }

  onToggleListItem = (event) =>{
    const { checked, id } = event.target

    this.state.list[id].isCompleted = checked
    this.setState({
      list: [ 
        ...this.state.list
      ]
    })
  }

  onEditTask = (event) =>{
    const { value, id } = event.target
    this.state.list[id].title = value
    this.setState({
      list: [
        ...this.state.list
      ]
    })
  }


  onCreateNewItem = () =>{
    this.setState({
      list: [
        ...this.state.list,
        { title: "", isCompleted: false }
      ]
    })
  }
  
  onDeleteTask = (event) =>{
    const { id } = event.target // get id
    this.state.list.splice(id, 1) // delete
    this.setState({
      list: [
        ...this.state.list
      ]
    })
  }

  render() {
  
    const isCompleted = [];
    const isUncompleted = [];

    this.state.list.filter((item,index) => item.isCompleted ?
       
        isCompleted.push({...item,index}) :  isUncompleted.push({ ...item, index }))
    
      
    return (
      <div className="container col-lg-5">
        <Header title={"NewTask"} onCreateNewItem={this.onCreateNewItem} />
        <CompletedSection 
          list={isCompleted} 
          onToggleListItem={this.onToggleListItem}
          onEditTask={this.onEditTask}
          onDeleteTask={this.onDeleteTask}
        />
        <List
          list={isUncompleted}
          onToggleListItem={this.onToggleListItem}
          onEditTask={this.onEditTask}
          onDeleteTask={this.onDeleteTask}
        />

      </div>

    )

  }
}

export default App
