import React from 'react'
import hero from "../../assets/register.svg"
import "./Hero.css"

const Hero = ({myTheme}) => {
  return ( 
    <section className='hero' data-theme = {myTheme}>

      <div className="container --grid-15">


      <div className="hero-text">
        <h1>Visit Vila Shop Landing Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, voluptatum modi temporibus architecto maxime dolorem accusantium dicta totam assumenda sequi facere deserunt cupiditate inventore dolor! Accusamus in placeat aperiam officiis.</p>
          <div className='--flex-start'>
            <button className='--btn btn-p'>learn more</button>
            <button className='--btn --btn-danger'>Sign up</button>
          </div>
      </div>


      <div className="--text-center">
        <img src={hero} alt="phone"  width={400}/>

        </div>
      </div>
    </section>
  )
}
 
export default Hero