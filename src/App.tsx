import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavItem } from "react-bootstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Routes from "./Routes";
import styled from 'styled-components'

// import { TodoList } from './TodoList';
// import { AddTodoForm } from './AddTodoForm';
// import Login from './containers/Login';

const initialTodos: Array<Todo> = [
  {text: "make react app with typescript", isComplete: true},
  {text: "deploy on heroku", isComplete: true},
  {text: "send to Lisa!!!!!", isComplete: true},
  {text: "add delete todo", isComplete: false},
  {text: "add users for a house/group", isComplete: false},
  {text: "add drag todo/assign to other users",isComplete:false},
  {text: "add redux", isComplete:false},
  {text: "add text message reminder", isComplete:false},
  {text: "add styled components", isComplete:false}
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

  const deleteTodo: DeleteTodo = selectedTodo => {
    const newTodos = todos.filter(todo => todo !== selectedTodo);
    setTodos(newTodos);
  };

  return (
    <div className="App container">
      <Nav pullRight>
        <NavItem href="/signup">Signup</NavItem>
        <NavItem href="/login">Login</NavItem>
      </Nav>
      <Routes />
    </div>
  );
};

export default App;
