import React from 'react'
import Profile from "./Profile"


import styles from "./ProfileList.module.css"
import {profiles} from "../profile-data"


const ProfileList = () => {
  return (

    <section className={styles.center}>
      <div>
        <h1>Team Member</h1>
        <div className={styles['profile-container']}>
          {profiles.map((profile,index)=>{
            const {img,name,job,company,link} = profile;
            return (
          
                // <Profile name = {profile.name} job = {profile.job} company = {profile.company} image = {profile.img} link={"https://twitter.com/AdoraNwodo"}/>  instead of writing multiple profile. we can use destructuring: const {img,name,job,company,link} = profile;
                <Profile key = {index} name = {name} job = {job} company = {company} image = {img} link={link}/>
         
            )
          })}
        </div>
      </div>

    </section>
)

       
   
  
}

export default ProfileList