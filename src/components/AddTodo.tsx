import { useState, type ChangeEvent, type FormEvent } from "react";
import { Todo } from "../models/Todo";
import { Button, TextField } from "@mui/material";

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
      <TextField
        id="content"
        type="text"
        label="Todo"
        variant="filled"
        color="secondary"
        value={todo.content}
        onChange={handleChange}
        slotProps={{ htmlInput: { "data-testid": "…" } }}
      />
      <Button size="large" variant="outlined" onClick={handleSubmit}>
        Add
      </Button>
    </form>
  );
};
