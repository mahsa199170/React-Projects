import React,{useState} from 'react'
// import {BsToggleOn} from "react-icons/bs"
import {MdToggleOff,MdToggleOn} from "react-icons/md"
import "./Header.css"
import {BsFillMoonFill} from "react-icons/bs"
import {FaSun,FaMoon} from "react-icons/fa"
import logo from "../../assets/logo.png"




const Header = ({myTheme, onToggleTheme, onSwitch}) => {

  const [toggle, setToggle] = useState(false)
  const [background, setBackground] = useState(false)

  const handleToggle = ()=>{
    setToggle(!toggle)
  }


  return (
    
      <header data-theme={myTheme}>

        <div className="container --flex-between">

        {/* image */}
        <div className="logo">
          <img src={logo} alt="logo" width={170}/>
        </div>


        {/* menue */}
        <nav>
          <ul className="--flex-between">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>

        {/* toggle */}
        <div onClick={onToggleTheme}>

          <span className="toggle-btn">

            <FaMoon color="pink" size={16} />
            <FaSun color="yellow" size={16} />
            <div className={onSwitch ? "ball move" : "ball"}></div>

          </span>
{/*         
          {toggle  ? (<MdToggleOff  className='off'/> ) : (<MdToggleOn  className='on'/>)}
          {toggle  ? ( <FaSun className='sun'/> ) : (<BsFillMoonFill className='moon' />)} */}
        </div>
        </div>
      </header>
     
  )
}

export default Header
