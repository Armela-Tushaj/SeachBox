import "./styles.css";
import { useState } from "react";

export default function App() {
  const fruits = ["lemon", "banana", "blueBerry", "orange", "tomato"];

  const [serchTerm, setSearchterm] = useState("");

  return (
    <div className="App">
      <div style={{ marginBottom: "24px" }}>GOOGLE</div>
      <input
        style={{ marginBottom: "24px" }}
        onChange={(e) => {
          setSearchterm(e.target.value);
        }}
      />
      {fruits
        .filter((fruit) => {
          const term = fruit.slice(0, serchTerm.length);
          return term === serchTerm;
        })
        .map((element, index) => {
          return <div key={index}>{element}</div>;
        })}
    </div>
  );
}
