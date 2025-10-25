import { useState } from "react";



function App() {
  let [count, setCount] = useState(19);

  function addCounter(){
    count = count + 1;
    console.log(count)
    setCount(count)
  }

  function removeCounter(){
    if(count > 0){
      count = count - 1;
    }

    setCount(count);
  }

  return (
    <>
      <div>
        <h1>Counter</h1>
        <p>count value: {count}</p>
        <button onClick={addCounter}>Increment</button>
        <button onClick={removeCounter}> Decrement</button>
      </div>
    </>
  );
}

export default App;
