import {useState} from "react";
import './App.css';

function App() {

  const[count,setCount]=useState(0)

  function decreasehandler(){

    setCount(count-1);

  }
  function increasehandler(){

    setCount(count+1);

  }
  function resethandler(){

    setCount(0);

  }

  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-[#344151] flex-col gap-10 ">
    <div className="text-[#0398d4] font-medium text-2xl">Increament or Decreament</div>
    <div className="w-[200px] h-[40px] text-[#000] justify-center rounded-lg bg-[#fff] flex flex-row items-center gap-[70px]">
      <button onClick={decreasehandler} className="text-xl">-</button>
      <div className="text-xl">{count}</div>
      <button onClick={increasehandler} className="text-lg">+</button>
    </div>
    <button onClick={resethandler} className="bg-[#0398d4] text-sm w-[100px] h-[30px] rounded-lg">Reset</button>
    </div>
  );
}

export default App;
