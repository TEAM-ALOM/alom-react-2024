import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Container, Title } from "./components/styles/StyledComponents";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useLocalStorage("toDos", []);

  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  const deleteToDo = (index) => {
    setToDos((currentArray) =>
      currentArray.filter((_, itemIndex) => itemIndex !== index)
    );
  };

  return (
    <Container>
      <Title>My To Dos ({toDos.length})</Title>
      <TodoForm toDo={toDo} onChange={onChange} onSubmit={onSubmit} />
      <hr />
      <TodoList todos={toDos} onDelete={deleteToDo} />
    </Container>
  );
}

export default App;
