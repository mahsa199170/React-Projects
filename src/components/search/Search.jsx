import React from 'react'
import "./Search.css"
const Search = ({inputValue, onInputchange}) => {
  return (
    <div className='--form-control'>
         <input type="text"  placeholder='Search Products' value = {inputValue} onChange={onInputchange}/>
    </div>
  )
}

export default Search