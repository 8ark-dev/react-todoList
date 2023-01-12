import React,{ useState } from "react";
import './App.css';

import ListView from "./components/ListView";
import InsertForm from "./components/InsertForm";

function App() {
  const [todoList, setToDoList] = useState([]);

  const handleInsert = (value) => {
    setToDoList((cur) => {
      const newToDoList = [...cur];
      newToDoList.push({
        key : new Date().getTime(),
        value : value,
        isCompleted : false
      });
      return newToDoList;
    });
  }

  const handleComplete = (index) => {
    setToDoList((cur) => {
      const newToDoList = [...cur];
      newToDoList[index].isCompleted = true;
      return newToDoList;
    })
  }

  const handleRemove = (index) => {
    setToDoList((cur) => {
      const newToDoList = [...cur];
      newToDoList.splice(index,1);
      return newToDoList;
    })
  }
  return (
    <>
      <ListView todoList={todoList}
       onComplete = {handleComplete}
        onRemove = {handleRemove}/>
      <InsertForm onInsert={handleInsert}/>
    </>
  );
}

export default App;
