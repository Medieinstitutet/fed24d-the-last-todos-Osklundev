import { useState, type ChangeEvent, type FormEvent } from "react";
import { Todo } from "../models/Todo";
import { Button, TextField } from "@mui/material";

type AddTodoProps = {
  addTodo: (t: Todo) => void;
};

export const AddTodo = ({ addTodo }: AddTodoProps) => {
  const [content, setContent] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!content.trim()) return;
    const newTodo = new Todo(content, false);
    addTodo(newTodo);
    setContent("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="content"
        type="text"
        label="Todo"
        variant="filled"
        value={content}
        onChange={handleChange}
        slotProps={{ htmlInput: { "data-testid": "…" } }}
      />
      <Button size="large" variant="text" onClick={handleSubmit}>
        Add
      </Button>
    </form>
  );
};
