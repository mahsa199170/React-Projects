import React,{useState, useEffect} from 'react'

const UseEffectCleanup = () => {

    const [width, setWidth] = useState(window.innerWidth)

    const updateWidth = ()=>{
        setWidth(window.innerWidth)
    }


    useEffect(()=>{
        window.addEventListener("resize", updateWidth)

        return () =>{
            window.removeEventListener("resize",updateWidth)
        }
        
    })

    // or insread of cleanup here we could add the [] as dependency array

    // useEffect(()=>{
    //     window.addEventListener("resize", updateWidth)
        
    // },[])



  return (
    <div className='--center-all'>
        <h1>Screen width</h1>
        <h1>{width}</h1>

    </div>
  )
}

export default UseEffectCleanup