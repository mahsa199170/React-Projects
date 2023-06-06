import React,{useRef, useEffect} from 'react'

const UnControlledInputs = () => {

        const nameInputRef = useRef(null)
        const jobInputRef = useRef(null)



    const handleSubmit = (e)=>{
        e.preventDefault();
        const eneteredName = nameInputRef.current.value
        const eneteredJob = jobInputRef.current.value
        //when we get these values we can do whatever we want with them we can pass thema s props or ...
        console.log(eneteredName, eneteredJob)
    }
    // console.log(nameInputRef)


    useEffect(()=>{
        nameInputRef.current.focus()
    },[])
    
  return (
    <div className='--bg-primary --mh-100vh'>
        <h1 className='--text-light --text-center'>controlled INputs</h1>
        <div className="--flex-center">
            <div className="--card --bg-light --width-500px --flex-center">
                <form onSubmit = {handleSubmit} className='--form-control'>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name"  ref = {nameInputRef }/>
                    </div>
                    <div>
                        <label htmlFor="job" >Job:</label>
                        <input type="text" name="job" ref= {jobInputRef }/>
                    </div>
                    <button type="submit" className='--btn --btn-block'>Submit user</button>
                </form>
            </div>
        
        </div>
    </div>
  )
}

export default UnControlledInputs