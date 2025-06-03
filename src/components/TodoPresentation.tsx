import {
  Avatar,
  Checkbox,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import type { Todo } from "../models/Todo";
import DeleteIcon from "@mui/icons-material/Delete";
import AssignmentIcon from "@mui/icons-material/Assignment";

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
        <ListItemAvatar>
          <Avatar>
            <AssignmentIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={todo.content} />
        <Checkbox
          checked={todo.isDone}
          onChange={() => completeTodo(todo.id)}
        />
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => removeTodo(todo.id)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </>
  );
};
