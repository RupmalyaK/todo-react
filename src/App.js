/**
 * Todo :-
 *  Glitch:- Multiline todo text 
 */
import React , {useState , useEffect} from "react";
import InCompletedTodo from "./components/InCompletedTodo";
import CompletedTodo from "./components/CompletedTodo.js"; 
import fetchData from "./data.js"; 
import './App.css';
import data from "./data";

  
 
  const App = props => {
  const [completedList , setCompletedList] = useState([]);
  const [inCompletedList , setInCompletedList] = useState([]); 
  let text = ""; 

  useEffect(
    () => {
    
        console.log("HTTP REUEST SENT");
        setCompletedList(
          fetchData.todos.filter(elem => elem.completed )
        );
        setInCompletedList(
          fetchData.todos.filter(elem => !elem.completed )
        );
      
    } , []
  ); 
const handleAddTodo = e => {
    if(text.length < 4 || (e.keyCode !== 13  && e.keyCode))
      {
        return; 
      }
    fetchData.addTodo(1 , text); 
    document.getElementsByClassName("new-todo")[0].value = "";
    text = "";  
    setInCompletedList(
      fetchData.todos.filter(elem => !elem.completed )
    );
    
}

const handleTextChange = e => {
    text = e.target.value; 
}

const handleComplete = id => {
    fetchData.complete(id);
    setInCompletedList(
      fetchData.todos.filter(elem => !elem.completed )
    );
    setCompletedList(
      fetchData.todos.filter(elem => elem.completed )
    );
}

const handleInComplete = id => {
  fetchData.inComplete(id);
  setInCompletedList(
    fetchData.todos.filter(elem => !elem.completed )
  );
  setCompletedList(
    fetchData.todos.filter(elem => elem.completed )
  );
}

const handleDelete = id => {
  fetchData.deleteTodo(id);
  setInCompletedList(
    fetchData.todos.filter(elem => !elem.completed )
  );
  setCompletedList(
    fetchData.todos.filter(elem => elem.completed )
  );
}

const isNotePresent = listType => {
  switch (listType)
    {
      case "incompleted-list":
        if (inCompletedList.length === 0)
          {
           return <InCompletedTodo isEmpty = {true} handleAddTodo = {handleAddTodo} handleTextChange = {handleTextChange}/>;
          }
          return  <InCompletedTodo inCompletedList = {inCompletedList} handleDelete = {handleDelete} handleAddTodo = {handleAddTodo} handleTextChange = {handleTextChange} handleComplete = {handleComplete}/>;
      case "completed-list":
        if(completedList.length === 0)
          {
            return <h3>No completed todo present</h3>; 
          } 
          return <CompletedTodo completedList = {completedList} handleInComplete = {handleInComplete} handleDelete = {handleDelete}/>;   
      
          default: return null; 
    }
}
  return (
    <div id = "container">
        <div id = "app">
          <header>
              <h1>To do</h1>
          </header> 
          
          {isNotePresent("incompleted-list")}
          <h2>Completed Todos</h2>
          <hr/>
           {isNotePresent("completed-list")}
        </div>
    </div>
  );
}



export default App;





