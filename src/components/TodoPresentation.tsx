import type { Todo } from "../models/Todo";

type TodoProps = {
  todo: Todo;
  completeTodo: (id: number) => void;
  removeTodo: (id: number) => void;
};

export const TodoPresentation = ({
  todo,
  completeTodo,
  removeTodo,
}: TodoProps) => {
  return (
    <>
      <li className={todo.isDone ? "flexList done" : "flexList"}>
        <p>{todo.content}</p>
        <input
          type="checkbox"
          checked={todo.isDone}
          onChange={() => completeTodo(todo.id)}
        />
        <button onClick={() => removeTodo(todo.id)}>Remove</button>
      </li>
    </>
  );
};
