import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { Container, Title} from "./components/styles/StyledComponents";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    const savedToDos = localStorage.getItem("toDos");
    if (savedToDos) {
      setToDos(JSON.parse(savedToDos));
    }
  }, []);

  useEffect(() => {
    if (toDos.length > 0) {
      localStorage.setItem("toDos", JSON.stringify(toDos));
    }
  }, [toDos]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  const onDelete = (index) => {
    setToDos((currentArray) =>
      currentArray.filter((_, idx) => idx !== index)
    );
  };

  return (
    <Container>
      <Title>My To Dos ({toDos.length})</Title>
      <TodoForm toDo={toDo} onChange={onChange} onSubmit={onSubmit} />
      <hr />
      <TodoList todos={toDos} onDelete={onDelete} />
    </Container>
  );
}

export default App;