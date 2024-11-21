'use client'
import { useState } from "react";

export default function Counter() {

  const [counter, setCounter] = useState(0);

  // function incrementar() {
  //   setCounter(counter + 1)
  // };

  const incrementar = (numero: number): void => {
    setCounter(counter + numero);
  };

  const disminuir = (numero: number): void => {
    setCounter(counter - numero);
  };

  return (
    <div>
      <h1 className="mt-2 font-medium">React Counter using useState hook</h1>
      <span>Valor:{counter}</span>
      <br />
      <div className="flex gap-2 ">
        <button onClick={() => incrementar(1)}
          className="p-2 border-2 border-slate-600 rounded-sm">
          incriemnetar +1
        </button>

        <button onClick={() => incrementar(2)} className="p-2 border-2 border-slate-600 rounded-sm">
          incrementar +2
        </button>
      </div>

      <div className=" flex gap-2 ">
        <button onClick={() => disminuir(1)}
          className="p-2 border-2 border-slate-600 rounded-sm">
          disminuir -1
        </button>

        <button onClick={() => disminuir(2)}
          className="p-2 border-2 border-slate-600 rounded-sm">
          disminuir -2
        </button>
      </div>


    </div>
  )
}