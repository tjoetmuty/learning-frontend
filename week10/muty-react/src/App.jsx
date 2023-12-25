import { useState } from "react";
import Student from "./Student";

function App() {
  const [name, setName] = useState("muty");
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Learn ReactJS", "Learn React pokoknya"]);

const handleClick = () => {
  setCount(count + 1);
}
 
  return (
    <>
      <Student name="Eddy" age={30} gender="male" />
      <Student name="Afista" age={27} gender="male" />
      <Student name="Ganjar" age={25} gender="male" />

      <div>
        <h1>{name}</h1>
        <button onClick={() => setName("cut muty ahmad")}>
          Change name into full name
        </button>
        <button onClick={() => setName("muty")}>Change back</button>
      </div>

      <div>
        <h1>Count : {count}</h1>
        <button onClick={handleClick}>count</button>
      </div>

      <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={() => setTodos([...todos, "Learn NextJS"])}>
        Add Todo
      </button>
    </div>
    </>
  );
}

export default App;
