import { useState, useEffect, useRef } from "react";
import styles from "./style.css";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const firstRender = useRef(true);

  const onChange = (event) => setToDo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    setToDos((toDos) => [toDo, ...toDos]);
    setToDo("");
  };

  const onClick = (targetIndex) => {
    setToDos((currentArray) =>
      currentArray.filter((item, index) => index !== targetIndex)
    );
  };

  useEffect(() => {
    if (!firstRender.current)
      localStorage.setItem("toDos", JSON.stringify(toDos));
    firstRender.current = false;
  }, [toDos]);

  useEffect(() => {
    const savedToDos = localStorage.getItem("toDos");
    if (savedToDos) {
      setToDos(JSON.parse(savedToDos));
    }
  }, []);

  return (
    <div>
      <h1>MY TO DOS ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => onClick(index)} className="deleteButton">
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
