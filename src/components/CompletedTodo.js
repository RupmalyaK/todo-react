import React from "react"; 
import Todo from "./Todo.js"; 

const CompletedTodo = props => {
    const displayTodoList = () => {
        const newArr = props.completedList.map (
            (elem , index) => <Todo key = {elem.id} class = "completed-todo" todoId = {elem.id} title = {elem.title} userId = {elem.userId} handleCheckClick = {props.handleInComplete} handleDelete = {props.handleDelete} />   
        );
        return newArr; 
    }

    return (
        <div className = "todos">
        {displayTodoList()}
        </div>
    );
}

export default CompletedTodo; 