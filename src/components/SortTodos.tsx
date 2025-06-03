type SortTodosProps = {
  sortTodos: () => void;
};

export const SortTodos = ({ sortTodos }: SortTodosProps) => {
  return (
    <>
      <button onClick={sortTodos}>Sort list</button>
    </>
  );
};
