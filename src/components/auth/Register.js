import React,{useState,useEffect} from 'react'
import registerImage from "../../assets/register.svg"
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai"
import {GoPrimitiveDot} from "react-icons/go"
import {FaCheck} from "react-icons/fa"


const Register = ({onLogin,onShowPassword, onTogglePassword}) => {

  // const[showPassword, setShowPassword] = useState(false)  --> we transfered it to the auth componet( lifting teh stet up)
  const[showIndicator, setShowIndicator] = useState(false)

  const[pass, setPass] = useState("")

  const[passLetter, setPassLetter] = useState(false)
  const[passNumber, setPassNumber] = useState(false)
  const[passChar, setPassChar] = useState(false)
  const[passLength, setPassLength] = useState(false)


  const[passComplete, setPassComplete] = useState(false)

  

  // const handleTogglePassword = ()=>{

  //   setShowPassword(!showPassword)
  // }   --> we transfered it to the auth componet( lifting teh stet up)

  const handleShowIndicator = () =>{
    setShowIndicator(!showIndicator)
  }

  const handlePasswordChange = (e) =>{
    setPass(e.target.value);
    console.log(pass)
  }

  useEffect(() => {

    //CHECK FOR LOWER AND UPPERCASE

    if(pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){
      setPassLetter(true);
    }else{
      setPassLetter(false);
    }

    //CHECK FOR NUMBERS

    if(pass.match(/([0-9])/)) {
      setPassNumber(true)
    }else{
      setPassNumber(false)
    }

    // CHECK FOR SPECIAL CHARACTER
    if(pass.match(/([!,%,&,@,#,$,^,*,?,_,~])/)){
      setPassChar(true)
    }else{
      setPassChar(false)
    }

    //CHECK FOR PASS LENGTH
    if(pass.length > 7 ){
      setPassLength(true)
    }else{
      setPassLength(false)
    }

    //CHECK FOR COMPLETENESS
    if(passLetter && passNumber && passChar && passLength){
      setPassComplete(true)
    }else{
      setPassComplete(false)
    }

  },[pass, passLetter, passNumber, passChar, passLength])



  return (
    <div className='main-container --flex-center '>
      
      <div className='form-container'>
        <form className='--form-control'>
            <h2 className='--color-danger --text-center'>Register</h2>
            <input type="text" className="--width-100" placeholder='Username' required/>
            <input type="email" className="--width-100" placeholder='Email' required/>

            {/* password */}
            <div className="password">
              <input type={onShowPassword ? "password" : "text"} 
              onFocus={handleShowIndicator}  
              className="--width-100 parent" placeholder='Password' 
              value={pass} onChange={handlePasswordChange} required/>
              <span className="icon" onClick={onTogglePassword}>
                {onShowPassword ? < AiOutlineEyeInvisible /> : < AiOutlineEye />}
              </span>
            </div>
             {/* password */}
             
            <button onClick = {()=>alert(pass)} disabled = {!passComplete} className={passComplete 
            ?'--btn --btn-primary --btn-block' 
            :'--btn --btn-primary --btn-block btn-disabled' }>Register</button>
            
           <span className='--text-sm --block'>
            have an account?{" "}
            <a href="#" className='--text-sm' onClick={onLogin}>
              Login
            </a>
           </span>

           {/* password strength */}
           <div className={showIndicator ? "show-indicator": "hide-indicator"}>
              <ul className='--list-style-none --card --bg-grey --text-sm --p'>
                <p className='--text-sm'>Password Strength indicator</p>
                <li className={passLetter ? "pass-green": "pass-red"}>
                  <span className='--align-center'>
                    { passLetter ? <FaCheck/> :  <GoPrimitiveDot />}
                    &nbsp; Lowecase & Uppercase
                  </span>
                </li>

                <li className={passNumber ? "pass-green": "pass-red"}>
                  <span className='--align-center'>
                  
                    {passNumber ? <FaCheck/> :   <GoPrimitiveDot />}
                    &nbsp; Numbers (0-9)
                  </span>
                </li>
                <li className={passChar ? "pass-green": "pass-red"}>
                  <span className='--align-center'>
                    {passChar ? <FaCheck /> : <GoPrimitiveDot />}
                    &nbsp; Special Character (!@#$%^&*)
                  </span>
                </li>
                <li className={passLength ? "pass-green": "pass-red"}>
                  <span className='--align-center'>
                    {passLength ? <FaCheck /> : <GoPrimitiveDot />}
                  
                    &nbsp; At least 8 Character
                  </span>
                </li>
              </ul>
           </div>
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