import React, { useState, useEffect } from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import NewToDo from './NewToDo';

const ToDoList = () => {
        const [task, setTask ] = useState("");
        const [list, setList ] = useState([]);
        const [disabled, setDisabled ] = useState(false);
        const [popoverOpen, setPopoverOpen ] = useState(false);
        const [counter, setCounter] = useState(0)

    const updateTask = (e) => {
        setTask(e.target.value);
        disabled && setDisabled(false)
        //if popoverOpen is true then set popoverOpen to false
        popoverOpen && setPopoverOpen(false);
    }
        
    const submitTask= event => {
            event.preventDefault();
            if (!task.trim()){
                //fix double spaces
                setDisabled(true);
                setPopoverOpen(true)
                } else {
                setList([task,...list]); 
                    setTask("");
                setPopoverOpen(false)
                }
            }
    
    const removeTask = (index) => setList([...list.slice(0,index), ...list.slice(index+1)])
    
    //example of componentDidMount
    useEffect(() => {
        console.log("useEffect applied");
    });
    //example of componentDidUpdate
    useEffect(() => {
        console.log("useEffect applied");
    });
    //example of componentWillUnmount
    useEffect(() => {
        console.log("useEffect applied");
    });
    
    const countingUp =()=>{
        setCounter(counter + 1)
    } 
    

    //editTask function

        return(
            <div className="tasks-container">
                <ListGroup className="list-group">
                <NewToDo 
                task = { task }
                updateTask = {updateTask}
                submitTask = {submitTask}
                disabled = {disabled}
                popoverOpen = {popoverOpen}
                />
                {list.map((item, index)=> {
                    return (
                    <ListGroupItem key={index} className={`list-group-item ${index % 2 ===0 ? "even": "odd"} `}>
                        {item}
                        <Button className="delete" size="sm" type="button"
                        onClick= {()=>removeTask(index)}>
                            Delete
                        </Button>
                    </ListGroupItem>
                    )
                }
                )}
                </ListGroup>
                <Button className="counting" size="lg" type="button" onClick= {()=>countingUp}>
                    Click the button to count up: {counter}
                </Button>
            </div>
        )
    }

export default ToDoList;