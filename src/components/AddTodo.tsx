import { useState, type ChangeEvent, type FormEvent } from "react";
import { Todo } from "../models/Todo";

type AddTodoProps = {
  addTodo: (t: Todo) => void;
};

export const AddTodo = ({ addTodo }: AddTodoProps) => {
  const [todo, setTodo] = useState<Todo>(new Todo("", false));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    addTodo(todo);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, [e.target.id]: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        id="content"
        type="text"
        value={todo.content}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
};
