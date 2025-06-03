import { Button, Stack, Typography } from "@mui/material";

type SortTodosProps = {
  sortTodos: () => void;
  direction: "asc" | "desc";
};

export const SortTodos = ({ sortTodos, direction }: SortTodosProps) => {
  return (
    <div className="sortContainer">
      <Stack direction="row" spacing={2}>
        <Typography variant="h6">Sort:</Typography>
        <Button onClick={sortTodos}>
          {direction === "asc" ? "A-Ö" : "Ö-A"}
        </Button>
      </Stack>
    </div>
  );
};
