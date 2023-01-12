import React from "react";
import './App.css';
import InsertForm from "./components/InsertForm";

function App() {
  
  return (
    <>
      <InsertForm onInsert={
        (value) => {
          console.log(value);
        }
      }/>
    </>
  );
}

export default App;
