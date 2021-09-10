import React, {Component} from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import ToDo from './ToDo';


class ToDoList extends Component{
    constructor(props){
        super(props)
        this.state = {
          task: "",
          list: [],
          disabled: false,
          popoverOpen: false,
          //Disabled Button. By default, the Button is enabled. To disable it, set the disabled property to true
        }
    }
    
    updateTask = (e) => {
        this.setState({ task: e.target.value })
        console.log(typeof this.state.task, this.state.task.length);
      }
    
    submitTask=(event)=> {
        if (this.state.task.length=== 0){
            this.setState({
                disabled: true,
                popoverOpen: true
            })

        } else {
            this.setState({
                list: [this.state.task,...this.state.list], 
                task: "",
                popoverOpen: false
            }) 
        }
            event.preventDefault();
    }

    removeTask = (index)=>{
        this.setState({list: [...this.state.list.slice(0,index), ...this.state.list.slice(index+1)]})
    }

    render(){
        const { task, list, disabled, popoverOpen } = this.state
        let color1 = "odd"
        let color2 = "even"
        return (
            <div className="tasks-container">
                <ListGroup className="list-group">
                <ToDo 
                task = { task }
                updateTask = {this.updateTask}
                submitTask = {this.submitTask}
                disabled = {disabled}
                popoverOpen = {popoverOpen}
                />
                {list.map((item, index)=> {
                    let listColor ;
                       if (index % 2 ===0) { 
                           listColor = color1;
                       } else {
                        listColor = color2;
                       }
                    const listItem = 
                    <ListGroupItem key={index} className={`list-group-item ${listColor} `}>
                        {item}
                        <Button className="delete" size="sm" type="submit"  
                        onClick= {()=>this.removeTask(index)}>
                            Delete
                        </Button>
                    </ListGroupItem>
                    return listItem
                }
                )}

                </ListGroup>
            </div>
        )
    }
}

export default ToDoList;
// {list.map((item, index)=> 
//     <ListGroupItem key={index} className="list-group-item">
//         { item }
//         <Button className="delete" size="sm" type="submit"  
//         onClick= {()=>this.removeTask(index)}>
//             Delete
//         </Button>
//     </ListGroupItem>
// )}