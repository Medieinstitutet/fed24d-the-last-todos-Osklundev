import type { Todo } from "../models/Todo";
import { TodoPresentation } from "./TodoPresentation";

type TodosProps = {
  todos: Todo[];
  completeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
};

export const Todos = ({ todos, completeTodo, removeTodo }: TodosProps) => {
  return (
    <ul>
      {todos.map((t) => (
        <TodoPresentation
          key={t.id}
          todo={t}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};
