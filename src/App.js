import React,{ useState, useMemo } from "react";
import './App.css';

import ListView from "./components/ListView";
import InsertForm from "./components/InsertForm";

function App() {
  const [todoList, setToDoList] = useState([]);

  const isLimitReached = useMemo(() => {
    return todoList.length >= 10;
  },[todoList]);

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
        {isLimitReached && <div style={{
          padding : "8px 16px",
          border : "1px solid #FA466A",
          backgroundColor : "#feecf0",
          color : "#FA466A",
          marginBottom : 16
        }}>
          * 할 일 목록이 너무 많습니다.
          </div>
        }
      <InsertForm onInsert={handleInsert} disabled={isLimitReached}/>
    </>
  );
}

export default App;
