import React, {useState} from 'react'

//if else
const Conditionals = () => {
    const [isloggedIn, setLoggedIn] = useState(true)

    let message;

    if(isloggedIn){
        message = "welcome luna"
    }else{
        message = "welcome geust"
    }
       



  return (
    <div>
        <h1 className='--text-center --p2'>{message}</h1>
    </div>
  )
}

export default Conditionals