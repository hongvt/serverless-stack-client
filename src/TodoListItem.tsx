import React from "react";
import "./TodoListItem.css";

interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = (props) => {
    const {todo,toggleTodo} = props;
    
    return (
        <li>
            <label className={todo.isComplete ? "isComplete":undefined}>
                <input 
                    type="checkbox"
                    checked={todo.isComplete}
                    onChange={() => toggleTodo(todo)}
                />
                {todo.text}
            </label>
        </li>
    );
};