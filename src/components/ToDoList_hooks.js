import React, { useState } from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import NewToDo from './NewToDo';

const ToDoList = () => {
        const [task, setTask ] = useState("");
        const [list, setList ] = useState([]);
        const [disabled, setDisabled ] = useState(false);
        const [popoverOpen, setPopoverOpen ] = useState(false);
        const [newTask, setNewTask] = useState("");
        const [currentIndex, setCurrentIndex] = useState(null);
        // const [item, setItem] = useState(null)

    const createTask = (e) => {
            setNewTask(e.target.value);
            disabled && setDisabled(false)
            //if popoverOpen is true then set popoverOpen to false
            popoverOpen && setPopoverOpen(false);
        }

    const updateTask = (e) => {
        setTask(e.target.value);
        disabled && setDisabled(false)
        popoverOpen && setPopoverOpen(false);
    }
        
    const submitNewTask= event => {
            event.preventDefault();
            if (!newTask.trim()){
                //fix double spaces
                setDisabled(true);
                setPopoverOpen(true)
                } else {
                setList([newTask,...list]); 
                    setNewTask("");
                setPopoverOpen(false)
                }
            console.log("submitting new task");
            }
    const saveTask= (index) => {
        if (!task.trim()){
            setDisabled(true);
            setPopoverOpen(true)
            } else {
            // setList([task,...list]); 
            const editedList = list.slice(); //returns the array
            console.log("edited list: ", editedList);
            console.log("edited list[index]: ", editedList[index]);
            editedList[index] = task
            console.log("edited list[index]=task: ", editedList[index]);
            setList([...editedList]);
            setCurrentIndex(null);
            setPopoverOpen(false)
        }
        console.log("after saving", list);
        }
    
    const editTask = (item, index) => {
        console.log("before saving", list);

        setCurrentIndex(currentIndex === index ? null:index); 
        //I don't undersand when current index equals index because we start off by making it null but when we click edit it activates the edit function which doesn't seem to reassign the current index.. i don't understand this conditional. Is it saying that if current index equals index then reasssign to null, and if it doesn't equal index, reassign to equal index.
        setList(!currentIndex ? list:list); //????
        setTask("");
    }

    const removeTask = (index) => setList([...list.slice(0,index), ...list.slice(index+1)])

        return(
            <div className="tasks-container">
                <ListGroup className="list-group">
                <NewToDo 
                newTask = { newTask }
                createTask = {createTask}
                submitNewTask = {submitNewTask}
                disabled = {disabled}
                popoverOpen = {popoverOpen}
                />
                {list.map((item, index)=> {
                    return (
                    <ListGroupItem key={index} className={`list-group-item ${index % 2 ===0 ? "even": "odd"} `}>
                        {currentIndex !== index && <div>{item}</div>}
                        {currentIndex === index && 
                            <input
                                placeholder = { item }
                                className="edit-item"
                                onChange = {updateTask}
                                value = {task}
                                type="text"
                            />}
                    <Button className="edit" size="sm" type="button"
                        onClick= {currentIndex !== index ? ()=>editTask(item, index) : ()=>saveTask(index)}>
                            { currentIndex !== index ? "Edit":"Save" }
                    </Button>
                    <Button className="delete" size="sm" type="button"
                    onClick= {()=>removeTask(index)}>
                        Delete
                    </Button>
                    </ListGroupItem>
                    )
                }
                )}
                </ListGroup>
            </div>
        )
    }

export default ToDoList;