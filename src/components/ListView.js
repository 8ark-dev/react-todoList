import React from 'react';

function ListView({todoList}) { // todolist라는 함수 
  return (
    <div>
        <ol>
            {
                todoList.map((item)=> {
                    return <li key={item.key}>
                        <span>{item.value}</span>
                        <button type='button'>완료</button>
                        <button type='button'>삭제</button>
                    </li>
                })
            }
        </ol>
    </div>
  );
}

export default ListView;