import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {blogs} from "./data"
import  {Link} from "react-router-dom"

const BlogDetails = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [author, setAuthor] = useState("");

  const {id} = useParams()


  useEffect(()=>{

    const thisBlog = blogs.find((blog) => blog.id === parseInt(id))
    setTitle(thisBlog.title)
    setAuthor(thisBlog.author)
    setDetails(thisBlog.details)
    

  })
  return (
    <div className='container --p'>
      <h1 className='--text-center'>{title}</h1>
      <hr />
      <p>
        <b>Author: {author}</b>
      </p>
      <br />
      <p>{details}</p>
      <div className='--my2'>
        <Link to = "/blogs">{`<<< Back to blogs`}</Link>
      </div>
    </div>
  )
}

export default BlogDetails
