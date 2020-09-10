import React, { useState } from 'react';

import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';

const initialTodos: Array<Todo> = [
  {text: "make react app with typescript", isComplete: true},
  {text: "deploy on heroku", isComplete: true},
  {text: "send to Lisa!!!!!", isComplete: true},
  {text: "add delete todo", isComplete: false},
  {text: "add users for a house/group", isComplete: false},
  {text: "add drag todo/assign to other users",isComplete:false},
  {text: "add redux", isComplete:false},
  {text: "add text message reminder", isComplete:false}
];

const App: React.FC = () => {

  const [todos, setTodos] = useState(initialTodos); 

  const toggleTodo: ToggleTodo = selectedTodo => {
      const newTodos = todos.map(todo => {
        if (todo === selectedTodo) {
          return {
            ...todo,
            isComplete: !todo.isComplete
          }
        }
        return todo;
      });
      setTodos(newTodos);
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" && 
      setTodos([...todos, {text: newTodo, isComplete: false}]);
  };

  return (
    <>
      <TodoList 
        todos={todos}
        toggleTodo={toggleTodo}
      />
      <AddTodoForm addTodo={addTodo}></AddTodoForm>
    </>
  );
};

export default App;
