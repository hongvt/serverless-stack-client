import React from "react";
import { TodoListItem } from "./TodoListItem";

interface TodoListProps {
    todos: Array<Todo>;
    toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<TodoListProps> = (props) => {
    const {todos, toggleTodo} = props;
    
    return ( 
        <ul>
            {todos.map(todo => {
                return ( 
                    <TodoListItem 
                        key={todo.text}
                        todo={todo} 
                        toggleTodo={toggleTodo}
                    />
                );
            })}
        </ul>
    ); 
};