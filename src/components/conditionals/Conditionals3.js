import React, {useState} from 'react'
import "./Conditionals3.css"

//Ternary operator
const Conditionals3 = () => {
    const [isloggedIn, setIsLoggedIn] = useState(true)

    const handleClick = ()=>{
      setIsLoggedIn(!isloggedIn)
    }

 
  return (
    <>
    <div className={isloggedIn ? "user" :"guest"}>
        {isloggedIn ? <h5 className='--text-center --p2'>wlecome luna</h5> : <h5 className='--text-center --p2'>wlecome guest</h5>}
      
    </div>

    <div className="--center-all">
      <button className="--btn --btn-primary" onClick={handleClick}>
        {isloggedIn ? "LogOut" : "LogIn"}
      </button>
    </div>
    </>
  )
}

export default Conditionals3