import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import type { Todo } from "../models/Todo";
import DeleteIcon from "@mui/icons-material/Delete";

type TodoProps = {
  todo: Todo;
  completeTodo: (id: string) => void;
  removeTodo: (id: string) => void;
};

export const TodoPresentation = ({
  todo,
  completeTodo,
  removeTodo,
}: TodoProps) => {
  return (
    <>
      <ListItem>
        <Checkbox
          edge="start"
          checked={todo.isDone}
          onChange={() => completeTodo(todo.id)}
        />
        <ListItemText>{todo.content}</ListItemText>
        <ListItemButton onClick={() => removeTodo(todo.id)}>
          <IconButton edge="end" aria-label="comments">
            <DeleteIcon></DeleteIcon>
          </IconButton>
        </ListItemButton>
      </ListItem>
    </>
  );
};
