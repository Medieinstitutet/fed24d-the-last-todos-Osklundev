import { useEffect, useState } from "react";
import "./App.css";
import { Todo } from "./models/Todo";
import { Todos } from "./components/Todos";
import { AddTodo } from "./components/AddTodo";
import { SortTodos } from "./components/SortTodos";
import { MadeByTab } from "./components/MadeByTab";

function App() {
  // Loads localstorage if there is one, otherwise default values.
  const loadTodos = (): Todo[] => {
    const saved = localStorage.getItem("todos");
    if (!saved) {
      return [
        new Todo("Diska", true),
        new Todo("Städa", false),
        new Todo("Tvätta", true),
      ];
    }

    const parsed: Todo[] = JSON.parse(saved);

    return parsed.map((t) => new Todo(t.content, t.isDone));
  };
  const [todos, setTodos] = useState<Todo[]>(loadTodos);

  // Updates Localstorage whenever state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (t: Todo) => {
    setTodos([...todos, t]);
  };

  const completeTodo = (id: string) => {
    setTodos(
      todos.map((t) => {
        if (t.id === id) {
          return { ...t, isDone: !t.isDone };
        }
        return t;
      })
    );
  };

  const removeTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const sortTodos = () => {
    const sorted = [...todos].sort((a, b) => {
      const compare = a.content.localeCompare(b.content, "sv", {
        sensitivity: "base",
      });
      return sortDirection === "asc" ? compare : -compare;
    });

    setTodos(sorted);
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <>
      <MadeByTab />
      <div className="todoContainer">
        <AddTodo addTodo={addTodo} />
        <SortTodos sortTodos={sortTodos} direction={sortDirection} />
        <Todos
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      </div>
    </>
  );
}

export default App;
