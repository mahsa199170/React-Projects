import React,{useState,useEffect} from 'react'
import spinner from "../assets/spinner1.jpg"

const Jokes = () => {

    const[joke, setJoke] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const url = "https://api.chucknorris.io/jokes/random"

    const getJoke = ()=>{
        setIsLoading(true)
        fetch(url)
         .then((response) =>{
            return response.json()
         })
         .then((data)=>{
            // console.log(data)
            setJoke(data)
            //when we get the data set the isLoading to false
            setIsLoading(false)
         })

    }

    useEffect(()=>{
        getJoke();
    },[])
  return (
    <section className='--flex-center --100vh --bg-primary'>
        <div className="container --card --bg-light --p">
            <h2>Random Jokes Generator</h2>
            <div className='--line'></div>

            {isLoading ? (
                <div className="--center-all">
                <img src={spinner} alt="spinner image" width={100} />
                </div>
            ) :(
                <>
                <h4>Joke id : {joke.id}</h4>
                <p>{joke.value}</p>
                </>
            ) }

           
            <br />
            <button className='--btn --btn-primary' onClick={getJoke}>Generate Joke</button>
        </div>
      
    </section>
  )
}

export default Jokes
