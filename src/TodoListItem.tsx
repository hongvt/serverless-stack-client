import React, { FormEvent } from "react";
import "./TodoListItem.css";

interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
    deleteTodo: DeleteTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = (props) => {
    const {todo,toggleTodo,deleteTodo} = props;

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        deleteTodo(todo);
    };
    
    return (
        <div>
            <button type="submit" onClick={handleSubmit}>
                x
            </button>
            <label className={todo.isComplete ? "isComplete":undefined}>
                <input 
                    type="checkbox"
                    checked={todo.isComplete}
                    onChange={() => toggleTodo(todo)}
                />
                {todo.text}
            </label>
        </div>
    );
};