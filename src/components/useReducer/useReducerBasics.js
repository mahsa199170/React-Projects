import { useReducer } from "react";

import {countReducer} from "./countReducer"

const initialState = {count :0}


// dispatch ---> replaces setCount( and tells tthe reducer function what to do)

// payload --> sends some information to the reducer function


const Counter = () => {


    const [state, dispatch] =  useReducer(countReducer, initialState)


    const handleSubtract = ()=>{

        const id ="123"
        dispatch({
            type: "SUBTRACT",
            payload: id
        })


    }

    const handleReset = ()=>{

        dispatch({
            type: "RESET",
        })

    }

    const handleAdd = ()=>{

        dispatch({
            type: "ADD",
        })
     

    }

  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container --bg-light --p2 --m2 --center-all">
        <h3>React Counter App</h3>

        <h1>{state.count}</h1>

        <div className="buttons --flex-center">
          <button className=" --btn --btn-danger" onClick={handleSubtract}>
            Subtract
          </button>
          <button className=" --btn" onClick={handleReset}>
            Reset
          </button>
          <button className=" --btn --btn-primary" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
