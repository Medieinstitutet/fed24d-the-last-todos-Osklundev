import { useState } from "react";
import "./App.css";
import { Todo } from "./models/Todo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo("Diska", true),
    new Todo("Städa", false),
    new Todo("Tvätta", true),
  ]);

  // const addTodo = (t: Todo) => {
  //   setTodos([...todos, t]);
  // };

  const completeTodo = (id: number) => {
    setTodos(
      todos.map((t) => {
        if (t.id === id) {
          return { ...t, isDone: !t.isDone };
        }
        return t;
      })
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <>
      <Todos
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    </>
  );
}

export default App;
