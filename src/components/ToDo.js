import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

class ToDo extends Component{


    render(){

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
                        onChange = { this.props.updateTask }
                        value={this.props.task}
                        // disabled = {this.props.disabled}
                    />

                    {/* We dont add the disabled property in the button nor the input bc it'll stick. */}
                    <Button type="submit" size="lg" onClick={this.props.submitTask} id="submit">
                        Submit
                    </Button>
                    
                    <Popover placement="bottom" isOpen={this.props.popoverOpen}
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

export default ToDo;
