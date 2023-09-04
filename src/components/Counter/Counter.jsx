import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Counter.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='container count'>
      <p className='textt'>Count: {count}</p>
      <Button className='incButton' variant='primary' onClick={increment}>
        Increment
      </Button>
      <Button className='decButton' variant='primary' onClick={decrement}>
        Decrement
      </Button>
    </div>
  );
}

export default Counter;
