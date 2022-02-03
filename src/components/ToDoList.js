import React, {Component} from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import NewToDo from './NewToDo';
// import EditToDo from './EditToDo';


class ToDoList extends Component{
    constructor(props){
        super(props)
        this.state = {
          task: "",
          newTask: "",
          list: [],
          disabled: false,
          popoverOpen: false,
          currentEditableIndex: null,
          count: 0
        }
    }

    createTask = (e) => {
        this.setState({ 
            newTask: e.target.value,
            popoverOpen: false,
            disabled: false
        })
      }

    updateTask = (e) => {
        this.setState({ 
            task: e.target.value,
            popoverOpen: false,
            disabled: false
        })
      }
    
    submitTask= event => {
        event.preventDefault();
        if (!this.state.newTask.trim()){ // 
            //fix double spaces 
            this.setState({
                disabled: true,
                popoverOpen: true
            })

        } else {
            this.setState({
                list: [this.state.newTask,...this.state.list], 
                newTask: "",
                popoverOpen: false
            }) 
        }
    }

    editTask=(item, index)=> {
        console.log("index: ", index); 
        console.log("item: ", item); 
        console.log("list [index]: ", this.state.list[index]);
        // const newList = this.state.list[index] = this.state.task
        this.setState({
            currentEditableIndex: this.state.currentEditableIndex === index ? null:index,
            list: !this.state.currentEditableIndex ? this.state.list:this.state.list,
            task:""
        })
        // console.log("newList: ", newList);
    }
    
    removeTask = (index)=>{
        this.setState({list: [...this.state.list.slice(0,index), ...this.state.list.slice(index+1)]})
    }

    countingUp =()=>{
        this.setState({count: this.state.count+1})
    } 

    // useEffect(() => {
    //     console.log("useEffect applied");
    // });

    render(){
        const { newTask, task, list, disabled, popoverOpen, currentEditableIndex, count} = this.state
        return (
            <div className="tasks-container">
                <ListGroup className="list-group">
                <NewToDo 
                newTask = { newTask }
                createTask = {this.createTask}
                submitTask = {this.submitTask}
                disabled = {disabled}
                popoverOpen = {popoverOpen}
                />
                {/* <EditToDo /> */}
                {list.map((item, index)=> {
                    return (

                    <ListGroupItem 
                        key= {index} 
                        className={`list-group-item ${index % 2 ===0 ? "even": "odd"} `}
                    >
                        { currentEditableIndex !== index && <div>{item}</div> }
                        {currentEditableIndex === index && <input 
                        className="edit-item"
                        onChange = {this.updateTask}
                        value= {task}
                        type="text"
                        />}
                        
                        <Button className="edit" size="sm" type="button"
                        onClick= {()=>this.editTask(item, index)}>
                            { currentEditableIndex !== index ? "edit":"save" }
                        </Button>
                        
                        <Button className="delete" size="sm" type="button"
                        onClick= {()=>this.removeTask(index)}>
                            Delete
                        </Button>
                    </ListGroupItem>
                    )
                }
                )}
                </ListGroup>
                
                <Button className="counting" size="lg" type="button" onClick= {this.countingUp}>
                    Click the button to count up: {count}
                </Button>
            </div>
        )
    }
}

export default ToDoList;