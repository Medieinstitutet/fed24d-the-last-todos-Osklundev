import { List } from "@mui/material";
import type { Todo } from "../models/Todo";
import { TodoPresentation } from "./TodoPresentation";

type TodosProps = {
  todos: Todo[];
  completeTodo: (id: string) => void;
  removeTodo: (id: string) => void;
};

export const Todos = ({ todos, completeTodo, removeTodo }: TodosProps) => {
  return (
    <div className="listContainer">
      <List>
        {todos.map((t) => (
          <TodoPresentation
            key={t.id}
            todo={t}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </List>
    </div>
  );
};
