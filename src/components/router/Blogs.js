import React from 'react'
import {blogs} from "./data"
import {Link} from "react-router-dom"


const Blogs = () => {
  return (
    <section className="container">
    <div className='--center-all'>
      <h1>Blog Page</h1>
      <p>Welcome to the <b>Blogs</b> page</p>
    </div>
    
    <article>
      {blogs.map((blog)=>{
        const {id, title, author} = blog;
        return (
          <div className='--card --m --p'>
            <h4>{title}</h4>
            <h4>{author}</h4>
            <Link to={`/blog/${id}`}>Read More</Link>
          </div>
        )
      })}
    </article>
    </section>
  )
}

export default Blogs
