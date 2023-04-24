import React from 'react'
import registerImage from "../../assets/register.svg"

const Register = ({onLogin}) => {
  return (
    <div className='main-container --flex-center '>
      
      <div className='form-container'>
        <form className='--form-control'>
            <h2 className='--color-danger --text-center'>Register</h2>
            <input type="text" className="--width-100" placeholder='Username' required/>
            <input type="email" className="--width-100" placeholder='Email' required/>
            <input type="password" className="--width-100" placeholder='Password' required/>
            <button className='--btn --btn-primary --btn-block'>Register</button>
            
           <span className='--text-sm --block'>have an account?{" "}<a href="#" className='--text-sm' onClick={onLogin}>Login</a></span>
        </form>
    </div>
    <div className='img-container'>
        <img src={registerImage} alt="login" />
      </div>
    </div>
  )
  console.log(onLogin)
}

export default Register