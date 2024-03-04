import { ITodo } from "../types/data";

interface ITodoItem extends ITodo {
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complete, removeTodo, toggleTodo } = props;

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={complete}
        onChange={() => toggleTodo(id)}
      />
      <span>{title}</span>
      <button onClick={() => removeTodo(id)}>x</button>
    </div>
  );
};
