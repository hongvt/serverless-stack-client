import React, { useState } from 'react';

import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';

const initialTodos: Array<Todo> = [
  {text: "walk the dog", isComplete: true},
  {text: "write app", isComplete: false}
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
