import React , {useState} from "react";
import Todo from "./Todo.js";
import "./InCompletedTodo.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const InCompletedTodo = props => {
    let text = ""; 
    const displayTodoList = () => {
        const newArr = props.inCompletedList.map (
            (elem , index) => <Todo key = {elem.id} class = "incomplete-todo" todoId = {elem.id} title = {elem.title} userId = {elem.userId} handleCheckClick = {props.handleComplete} handleDelete = {props.handleDelete}/>   
        );
        return newArr; 
    }

    const ifEmpty = () => {
        if (props.isEmpty)
            {
                return <h3>No incompleted todo present</h3>
            }
            return displayTodoList(); 
    }
  
  return (<div className = "incompleted-todo">
     <div className = "add-todo">
        <input type = "text" placeholder = "Type your todo here ..." className = "new-todo" onChange = {props.handleTextChange} onKeyDown = {props.handleAddTodo} />
        <div className = "add-button">
          <FontAwesomeIcon icon = {faPlus} onClick = {props.handleAddTodo}/>
        </div>
    </div>   
    <h2>Upcoming Todos</h2>
    <hr/>
    <div className = "todos">
        {ifEmpty()}
    </div>
    </div>); 
}

export default InCompletedTodo; 
