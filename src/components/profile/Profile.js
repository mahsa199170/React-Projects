import React from 'react'
import "./Profile.scss"
import {users} from "../../users"
import {BiTrash} from "react-icons/bi"
import { useState } from 'react'


const Profile = ({name, job,image}) => {


  const [people, setPeople] = useState (users)

  const removePerson = (id)=>{
  
    const newPeople = people.filter((person)=> person.id !== id)
    setPeople(newPeople)
  
  }
  
  

  return (
    <section className='profile-sec --flex-center --100vh --bg-primary'>
        <div className='container'>
          <h2 className='--text-light'>User Profile App</h2>

          {people.map((person)=>{
        const {id, name, job, img}  = person
        return(
          <div  className = "profile --card --flex-between --p" key = {id}> 
          <img src={img} alt="profile" />
          <div className="desc"> 
             <h4 className='--text-light'>Name: {name}</h4>
            <p className='--text-light'>Job:{job}</p>
          </div>
          <BiTrash size={18} className = "icon" onClick={()=> removePerson(id)}/>
          </div>
        )
      })}

      <button className='--btn --btn-danger' onClick={()=>setPeople([])}>Clear All</button>


          </div>

      
    </section>
  )
}

export default Profile