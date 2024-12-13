import { Form, Input, Button } from "./styles/StyledComponents";

function TodoForm({ toDo, onChange, onSubmit }) {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        onChange={onChange}
        value={toDo}
        type="text"
        placeholder="Write your to do..."
      />
      <Button>Add To Do</Button>
    </Form>
  );
}

export default TodoForm;
