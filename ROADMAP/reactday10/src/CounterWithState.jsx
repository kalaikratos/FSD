import React,{useState} from 'react'

function CounterWithState() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const incrementByTwo = () => setCount(count + 2);
  return (
      <div>
          <h2>Counter with useState</h2>
          Count:{count}
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
          <button onClick={incrementByTwo}>+2</button>
    </div>
  )
}

export default CounterWithState