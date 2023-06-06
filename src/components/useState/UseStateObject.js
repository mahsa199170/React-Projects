import React, {useState} from 'react'

const UseStateObject = () => {

    const [profile, setProfile] = useState({ 
        name: "john doe",
        job: "web dev",
        company : "google"
    })

    const updateCompany = ()=>{
        // setProfile({company: "microsoft"}) if we write like this when we click on button it will update the company but, the name and job values will be disappeared, so here is where we nee dto use spreed operator, so that it make  acopy of all teh information s we have access to all info, then it will update whatever we want eg change teh company
        setProfile({...profile,company: "microsoft"})
        // if for any reason w ehave to work with object idrectly, and you have to work with it using useestate hook, this is how you can updat ethe object. you first copy all the properties of the object then you update the paticular property you want to update
    }
  return (
    <>
        <h2 className='" --text-center --my2'>UseStateObject</h2>

        <div className="--card --mx2">
            <h2>Name: {profile.name}</h2>
            <h4>Job: {profile.job}</h4>
            <h4>Company: {profile.company}</h4>

        </div>

        <div className="--centerall --my2">
            <button className='--btn --btn-primary' onClick={updateCompany}>change company</button>
        </div>
        
    </>
  )
}

export default UseStateObject