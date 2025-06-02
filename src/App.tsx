import { useState } from "react";
import "./App.css";
import { TodoPresentation } from "./components/TodoPresentation";
import { Todo } from "./models/Todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Diska", true),
    new Todo("Städa", false),
    new Todo("Tvätta", true),
  ]);

  const addTodo = (t: Todo) => {
    setTodos([...todos, t]);
  };
  return (
    <>
      <ul>
        {todos.map((t) => (
          <TodoPresentation content={t.content} done={t.isDone} />
        ))}
      </ul>
    </>
  );
}

export default App;
