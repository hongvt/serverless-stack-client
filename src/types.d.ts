type Todo = {
    text: string;
    isComplete: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (newTodo: string) => void;

type DeleteTodo = (selectedTodo: Todo) => void;