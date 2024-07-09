import { useEffect, useState } from "react";

function Counter() {
  const [angka, setAngka] = useState(0);

  function addAngka() {
        setAngka(angka + 1);
  }

  function manipulateDOM() {
    console.log("Lifecycle: Component dimount");

    document.title = `Result: ${angka}`;
  }

  useEffect(manipulateDOM, [angka]);

  console.log("Lifecycle: Component dirender");

  return (
    <div>
      <p>Result: {angka}</p>
      <button onClick={addAngka}>Add</button>
    </div>
  );
}

export default Counter;
