type SortTodosProps = {
  sortTodos: () => void;
  direction: "asc" | "desc";
};

export const SortTodos = ({ sortTodos, direction }: SortTodosProps) => {
  return (
    <div>
      <p>Sort:</p>
      <button onClick={sortTodos}>{direction === "asc" ? "A-Ö" : "Ö-A"}</button>
    </div>
  );
};
