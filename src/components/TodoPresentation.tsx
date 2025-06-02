type TodoProps = {
  content: string;
  done: boolean;
};

export const TodoPresentation = ({ content, done }: TodoProps) => {
  return (
    <>
      <li className="flexList">
        <p>{content}</p>
        <input type="checkbox" checked={done} />
      </li>
    </>
  );
};
