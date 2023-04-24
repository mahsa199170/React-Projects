import React,{useState,useEffect} from 'react'
import Login from './Login'
import "./AuthContainer.scss";
import Register from './Register';
import Reset from './Reset';
 
const AuthContainer = () => {
  const [auth, setAuth] = useState({
    login: true,
    register: false,
    reset: false
  })
  // const [login, setLogin] = useState(true)
  // const [register, setRegister] = useState(false)
  // const [reset, setReset] = useState(false)



  useEffect(() => {
    // Check if there is an auth state in localStorage
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      setAuth(JSON.parse(storedAuth));
    }
  }, []);

  useEffect(() => {
    // Save the current auth state to localStorage
    localStorage.setItem('auth', JSON.stringify(auth));
  }, [auth]);

  

  const handleReset = ()=>{
    // when we are updating an object, we have to use one of two things, either we have to rewrite all properties inside the object, or use the spreed operator syntax, here i am using the first approach and rewriting the properties of object 
    setAuth({reset: true, register: false, login: false})
    // setReset(true)
    // setLogin(false)
    // setRegister(false)
  }

  const handleRegister = ()=> {
    setAuth({register: true, login:false, reset:false})
    // setReset(false)
    // setLogin(false)
    // setRegister(true)
  }

  const handleLogin = ()=> {
    setAuth({login: true, reset:false,register:false})
    // setReset(false)
    // setLogin(true)
    // setRegister(false)
  }
  
  return (
    <section className ="--flex-center --100vh">
      <div className="container box">
        {auth.login && <Login onReset={handleReset} onRegister={handleRegister}/>}
        {auth.reset && <Reset onLogin={handleLogin}/>}
        {auth.register && <Register onLogin = {handleLogin} />}
      </div>
      
    </section>
  )
}

export default AuthContainer