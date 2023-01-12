import React, { useState } from 'react';

function InsertForm({onInsert, disabled}) {
  const [inputValue,setInputValue] = useState("");
  return (
    <form onSubmit={
        (e) => {
            e.preventDefault();
            if (typeof onInsert==="function") {onInsert(inputValue);}
            setInputValue("");
        }
    } style={{
        backgroundColor : '#fff',
        borderRadius : 16,
        marginBottom : 16,
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center'
    }}>
        <input value={inputValue} onChange={
            (e) => {
                setInputValue(e.target.value);
            }
        } style={{
            flex : '1',
            border : 'none',
            color : '#000',
            padding : '6px 12px',
            backgroundColor : 'transparent',
        }} disabled={disabled}/>
        <button  style={{
            border : 'none',
            borderRadius : 16,
            backgroundColor : '#3ab6bc',
            color : '#ffffff',
            cursor : 'pointer',
            padding : '8px 16px'
        }}>등록</button>
    </form>
  )
}

export default InsertForm