import './App.css';
import React, {Component} from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList_hooks'
import Footer from './components/Footer'

class App extends Component{

  render(){
    return (
      <div className = "to-do-body">
        <Header />
        <ToDoList /> 
        {/* nested component: NewToDo && EditToDo */}
        <Footer />
      </div>
      )
    }
  }
  export default App;
