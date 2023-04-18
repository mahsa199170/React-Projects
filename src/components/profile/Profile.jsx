import React from 'react'
import Card from '../UI/card/Card'
import styles from "./Profile.module.css"
// import profile1 from "../../assets/profile1.png"

import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import {AiOutlineGooglePlus} from "react-icons/ai"

import {IconContext} from "react-icons"



const Profile = ({name, job, company, image, link}) => {

  return (
    <Card>

    <div className={styles.profile}>
        <img src= {image} alt=""/>
        <div className={styles["profile-content"]}>
          <h3>My Profile</h3>
          <div className={styles.text}>
          <p>Name:</p>
          <p>{name}</p>
          </div>

          <div className={styles.text}>
          <p>Job:</p>
          <p>{job}</p>
          </div>

          <div className={styles.text}>
          <p>Company:</p>
          <p>{company}</p>
          </div>
        
        {/* <div className={styles.icons}>
          <AiOutlineTwitter color="#666" size={20}/>
          <AiFillGithub color="#666" size={20}/>
          <AiOutlineGooglePlus color="#666" size={20}/>
        </div> */}

          <IconContext.Provider value={{color: "#666", size:"20px"}}> 

            <div className={styles.icons}>
              <AiOutlineTwitter />
              <AiFillGithub />
              <AiOutlineGooglePlus />
    </div>

</IconContext.Provider>
      </div>

        <div className={styles.btn}>
          <a href={link} target ="_blank" rel="noreferrer">View Profile</a>
        </div>
    </div>
    </Card>
  )
}

export default Profile