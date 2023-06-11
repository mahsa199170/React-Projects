import { useContext } from 'react'
import ThemeContext from '../../context/themeContext'
import React from 'react'
import "./Footer.css" 

const Footer = () => {

  const {theme} = useContext(ThemeContext)
  return (
    <div>
        <footer className='--flex-center' data-theme = {theme}>
          <p>Copyright &copy; 2023</p>
        </footer>
    </div>
  )
}

export default Footer