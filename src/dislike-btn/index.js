import React, {useState} from 'react';
import './index.css'

const Dislike_Btn = ({selectDislikeJokes,item}) => {

  const [isActive, setIsActive] = useState('')
  // console.log(item)
  // console.log(isActive, 'isActive')

  return(
    <>
      <button
        className="dislike-btn"
        onClick={()=>selectDislikeJokes(item)}
        > 
        Dislike 
      </button>
    </>
  )
}

export default Dislike_Btn