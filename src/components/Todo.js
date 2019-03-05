import React from "react"; 
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck , faTrash} from "@fortawesome/free-solid-svg-icons";
import "./Todo.css";

const Todo = props => {

    return (
        <>
        <div className = "todo">
        <div className = {"title " + props.class}>
        <h2>{props.title}</h2>
        </div>
        <div className = "checkmark">
            <FontAwesomeIcon icon={faCheck}  onClick = {() => {props.handleCheckClick(props.todoId)}} />
        </div>
        <div className = "trash">
             <FontAwesomeIcon icon={faTrash}  onClick = {() => {props.handleDelete(props.todoId)}} />    
        </div>    
        </div>
        </>
    );
}

export default Todo; 