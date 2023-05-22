import React, { useState } from 'react';  
  
function Counter() {  
  const [count, setCount] = useState(0);  
  
  function increment() {  
    setCount(count + 1);  
  } 
  
  return (  
    <div>  
      我是hook组件
      <h1>Counter: {count}</h1>  
      <button onClick={increment}>Increment</button>  
    </div>  
  );  
}  
  
export default Counter;