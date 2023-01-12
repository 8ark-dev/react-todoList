import React from 'react';

function ListView({todoList, onComplete, onRemove}) { // 함수들
  return (
    <div>
        <ol>
            {
                todoList.map((item, index)=> {
                    return <li key={item.key}>
                        <span>{item.value}</span>
                        <button type='button' onClick={() => {
                            if(typeof onComplete === "function") onComplete(index);
                        }}>완료</button>
                        <button type='button' onClick={() => {
                            if(typeof onRemove === "function") onRemove(index);
                        }}>삭제</button>
                    </li>
                })
            }
        </ol>
    </div>
  );
}

export default ListView;