import React, {useState} from 'react'

//Logical AND (&&)
const Conditionals2 = () => {
    const [isloggedIn, setLoggedIn] = useState(false)

 
  return (
    <div>
        {isloggedIn && <h1 className='--text-center --p2'>wlecome luna</h1>}
        {!isloggedIn && <h1 className='--text-center --p2'>wlecome guest</h1>}
    </div>
  )
}

export default Conditionals2