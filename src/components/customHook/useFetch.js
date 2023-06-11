import React,{useState, useEffect} from 'react'

const useFetch = (url) => {


    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);


    //here we want to use async wait(not the fetch)

    const getUsers = async()=>{
        setIsLoading(true);
        setError(false)

        try {
            setIsLoading(true)
        const response = await fetch(url)
        if (!response.ok){
            throw new Error("Something went wrong")
        }
        const data = await response.json();
        // console.log(data)
        setData(data)
        setIsLoading(false)

        } catch(err){
            console.log(err.message)
            setError(true)
            setIsLoading(false)

        }
        

    }


    useEffect(()=>{
        getUsers()
    },[url])

    return {data, error, isLoading}
  
}

export default useFetch