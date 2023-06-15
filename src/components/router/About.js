import React from 'react'
import { Routes, Route} from "react-router-dom"
import Info from './Info'

const About = () => {
  return (
    <section className='--flex-center'>
    <div className='--center-al'>
      <h1>About Page</h1>
      <p>Welcome to the <b>About</b> page</p>

      <Routes>
        <Route path = "info" element = {<Info />}/>
      </Routes>

    </div>
    </section>
  )
}

export default About