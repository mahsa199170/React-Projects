import React from 'react'
import "./Categories.css"

const Categories = ({categories,filterItems}) => {

  const capitalize = (word)=>{
    return(
      word.charAt(0).toUpperCase() + word.slice(1)
    )
  }
  return (
    <div className="--flex-center">

      {categories.map((category, index)=>{
        return(
          <button type='buttom' className='btn --btn --btn-secondary'
           key = {index} onClick={()=> filterItems(category)}>
            {capitalize(category)}
            {/* {category.toUpperCase()} */}
            </button>
        )
      })}

      

    </div>
   
  )
}

export default Categories
