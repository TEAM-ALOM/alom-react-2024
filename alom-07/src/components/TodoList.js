import TodoItem from "./TodoItem";
import { List } from "./styles/StyledComponents";

function TodoList({ todos, onDelete }) {
  return (
    <List>
      {todos.map((item, index) => (
        <TodoItem key={index} todo={item} onDelete={() => onDelete(index)} />
      ))}
    </List>
  );
}

export default TodoList;
