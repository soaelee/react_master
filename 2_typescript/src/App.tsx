import React, { useState } from "react";
import Circle from "./components/Circle";

function App() {
  const [username, setUsername] = useState<string>("");
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setUsername(value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("hello", username);
  };
  return (
    <div>
      <Circle bgColor="tomato" />
      <Circle />
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={onChange}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default App;
