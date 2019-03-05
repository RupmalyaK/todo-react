const todos = [
    {
      userId:1,
      title:"Gotta buy food",
      id:1,
      completed:false
    },
    {
      userId:1,
      title:"Gotta buy cereal",
      id:2,
      completed:false
    },
    {
      userId:1,
      title:"Gotta buy crackers",
      id:3,
      completed:false
    },
    {
      userId:1,
      title:"Gotta buy banana",
      id:4,
      completed:false
    },
    {
      userId:1,
      title:"Gotta buy hooks",
      id:5,
      completed:false,
    }
  ]

  let id = 6; 
  const addTodo = (userId , title ) => {
    todos.unshift(
      {
        userId,
        title,
        id: ++id
      }
    );
  }
 
  const complete = id => {
      const todo = todos.find(todo => todo.id === id);
      
      todo.completed = true;  
  }

  const inComplete = id => {
    const todo = todos.find(todo => todo.id === id);
    todo.completed = false; 
  }

  const deleteTodo = id => {
    todos.forEach( (obj , index) => {
      if (obj.id === id)
        {
          delete todos[index];
        }
    });
  }
  export default {todos , addTodo , complete , inComplete , deleteTodo}; 


