import { ListItem, DeleteButton } from "./styles/StyledComponents";

function TodoItem({ todo, onDelete }) {
  return (
    <ListItem>
      {todo}
      <DeleteButton onClick={onDelete}>❌</DeleteButton>
    </ListItem>
  );
}

export default TodoItem;
