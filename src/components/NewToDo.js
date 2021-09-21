import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

class NewToDo extends Component{


    render(){
        const { createTask, newTask, submitTask, popoverOpen } = this.props
        return (
            <div>
            <Form>
                <FormGroup className= "form-group">
                    <Label className= "to-do-label">
                        Tasks to be Completed: 
                    </Label>

                    <Input 
                        className="form-control"
                        placeholder= "Insert task"
                        onChange = { createTask }
                        value={newTask}
                        type="text"
                        // disabled = {this.props.disabled}
                    /> 

                    {/* We dont add the disabled property in the button nor the input bc it'll stick. */}
                    <Button type="submit" size="lg" onClick={submitTask} id="submit">
                        Submit
                    </Button>
                    
                    <Popover placement="bottom" isOpen={popoverOpen}
                    target="submit">
                    <PopoverHeader>
                        Oops!
                    </PopoverHeader>
                        <PopoverBody>
                        You didn't type anything down. You'll need to insert a task in order to submit it.
                        </PopoverBody>
                    </Popover>       
                </FormGroup>
            </Form>
            </div>
        )
    }
}

export default NewToDo;
