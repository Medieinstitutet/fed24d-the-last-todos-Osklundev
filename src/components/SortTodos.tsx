import { Button } from "@mui/material";

type SortTodosProps = {
  sortTodos: () => void;
  direction: "asc" | "desc";
};

export const SortTodos = ({ sortTodos, direction }: SortTodosProps) => {
  return (
    <div>
      <p>Sort:</p>
      <Button onClick={sortTodos}>{direction === "asc" ? "A-Ö" : "Ö-A"}</Button>
    </div>
  );
};
