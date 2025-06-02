import { useEffect, useState } from "react";
import "./App.css";
import { Todo } from "./models/Todo";
import { Todos } from "./components/Todos";

function App() {
  const loadTodos = (): Todo[] => {
    const saved = localStorage.getItem("todos");
    if (!saved) {
      console.log("not saved");

      return [
        new Todo("Diska", true),
        new Todo("Städa", false),
        new Todo("Tvätta", true),
      ];
    }
    console.log("loading localstorage");

    const parsed: Todo[] = JSON.parse(saved);

    return parsed.map((t) => new Todo(t.content, t.isDone));
  };
  const [todos, setTodos] = useState<Todo[]>(loadTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
