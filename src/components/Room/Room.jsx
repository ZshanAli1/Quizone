import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Room.css";

function Room() {
  const [flag, setFlag] = useState(true);
  const [temp, setTemp] = useState(35);
  const on = () => {
    setFlag(true);
  };
  const off = () => {
    setFlag(false);
  };
  const increment = () => {
    setTemp(temp + 1);
  };

  const decrement = () => {
    setTemp(temp - 1);
  };
  return (
    <>
      <div className={`container room ${flag ? "light" : "dark"}`}>
        <Button className={`btn`} variant='primary' onClick={on}>
          ON
        </Button>
        <Button className={`btn`} variant='primary' onClick={off}>
          OFF
        </Button>
      </div>
      <div className='container temp'>
        <p className={`textt ${temp >= 40 ? "red" : "blue"}`}>
          Temperature: {temp}
        </p>
        <Button className='incTemp' variant='primary' onClick={increment}>
          +
        </Button>
        <Button className='decTemp' variant='primary' onClick={decrement}>
          -
        </Button>
      </div>
    </>
  );
}
export default Room;
