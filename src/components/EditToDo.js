// import React, { Component } from 'react';
// import { Button, ListGroupItem, Input } from 'reactstrap';

// class EditToDo extends Component {
//     constructor(props){
//         super(props)
//         this.state = {

//         }
//     }

// render (){
//     let {list, task, updateTask} =  this.props
//     return (
//         <>
//         {list.map((item, index)=> {
//             return (
//             <ListGroupItem 
//                 key={index}  
//                 className={`list-group-item ${index % 2 ===0 ? "even": "odd"}`}
//             >
//                 <Input 
//                 className="edit-item"
//                 placeholder= { item }
//                 onChange = { updateTask }
//                 value={task}
//                 type="text"
//                 />
//                 <Button key= { index } className="edit" size="sm" type="button"
//                 onClick= {()=>this.editTask(item, index)}>
//                     { editnsave }
//                 </Button>
                
//                 <Button className="delete" size="sm" type="button"
//                 onClick= {()=>this.removeTask(index)}>
//                     Delete
//                 </Button>

//             </ListGroupItem>
            
//             )
//         }
//         )}
//         </>
//     )
// }
// }

// export default EditToDo;