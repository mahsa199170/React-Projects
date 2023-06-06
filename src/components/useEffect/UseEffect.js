import React,{useState,useEffect} from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0)
  return (
    <div className='--center-all'>

        <h1>{count}</h1>
        <button className='--btn --btn-primary' onClick={()=> setCount(count +1)}>increment</button>
      
    </div>
  )
}

export default UseEffect
