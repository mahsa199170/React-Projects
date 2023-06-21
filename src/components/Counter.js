import {useSelector,useDispatch} from 'react-redux'
import { ADD, ADD_BY_5, SUBTRACT, RESET } from "../store/slice/counterSlice"
import {TOGGLE_AUTH} from "../store/slice/authSlice"

const Counter = () => {

  const count = useSelector((state)=>state.counter.count)
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn)

  // console.log(count)
  // console.log(isLoggedIn)

  const dispatch = useDispatch();

  
  return (
    <section className="--flex-center --100vh --bg-primary">
      <div className="container --bg-light --p2 --m2 --center-all">
      <button className=" --btn --btn-danger" onClick={()=> dispatch(TOGGLE_AUTH())}>{!isLoggedIn ? "Login": "Logout"}</button>
      <hr />
      {!isLoggedIn ? <p>Please Log in</p> : (
        <>
        <h3>My Calculator</h3>
        <h1 >{count}</h1>
        <div className="buttons --flex-center">
          <button className=" --btn --btn-danger" onClick={()=> dispatch(SUBTRACT())}>Subtract</button>
          <button className=" --btn" onClick={()=>dispatch(RESET())}>Reset</button>
          <button className=" --btn --btn-primary" onClick={()=>dispatch(ADD())}>Add</button>
          <button className=" --btn --btn-primary" onClick={()=>dispatch(ADD_BY_5(5))}>Add by 5</button>
        </div>
        </>
      )}
        

      </div>
    </section>
  )
}

export default Counter
