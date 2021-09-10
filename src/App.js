import './App.css';
import React, {Component} from 'react';
import Header from './components/Header';
import ToDoList from './components/ToDoList'
import Footer from './components/Footer'

class App extends Component{

  render(){
    return (
      <div className = "to-do-body">
        <Header />
        <ToDoList />
        <Footer />
      </div>
      )
    }
  }
  export default App;
