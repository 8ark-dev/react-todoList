import React, { useState } from 'react';

function InsertForm({onInsert}) {
  const [inputValue,setInputValue] = useState("");
  return (
    <form onSubmit={
        (e) => {
            e.preventDefault();
            if (typeof onInsert==="function") {onInsert(inputValue);}
            setInputValue("");
        }
    }>
        <input value={inputValue} onChange={
            (e) => {
                setInputValue(e.target.value);
            }
        }/>
        <button>등록</button>
    </form>
  )
}

export default InsertForm