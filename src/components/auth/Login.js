import React from 'react'
import loginImage from "../../assets/login.svg"
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"


const Login = ({onReset, onRegister,onShowPassword,onTogglePassword}) => {
  return (
    <div className='main-container --flex-center '>
      <div className='img-container'>
        <img src={loginImage} alt="login" />
      </div>

      <div className='form-container'>
        <form className='--form-control'>
            <h2 className='--color-danger --text-center'>Login</h2>
            <input type="text" className="--width-100" placeholder='Username' required/>

            {/* password */}
            <div className="password">
              <input type={onShowPassword ?  "text" : "password"}  
              className="--width-100 parent" placeholder='Password' required/>
              <span className="icon" onClick={onTogglePassword}>
                {onShowPassword ? < AiOutlineEyeInvisible /> : < AiOutlineEye />}
              </span>
            </div>
             {/* password */}
             


            <button className='--btn --btn-primary --btn-block'>Login</button>
            <a href="#" className='--text-sm' onClick={onReset}>Forgot password?</a>
           <span className='--text-sm --block'>Don't have an account?{" "}<a href="#" className='--text-sm' onClick={onRegister}>Register</a></span>
        </form>
        
      </div>
    </div>
  )
}

export default Login