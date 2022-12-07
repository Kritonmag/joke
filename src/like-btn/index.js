import React, {useState} from 'react';
import './index.css'

const Like_Btn = ({selectlikeJokes,item}) => {

  const [isActive, setIsActive] = useState('')
  // console.log(item)
  // console.log(isActive, 'isActive')
  return(
    <>
      <button
        className={isActive}
        onClick={()=>{selectlikeJokes(item);
          item.like == true ? setIsActive('like-btn') : setIsActive(' ')}}
        > 
        Like 
      </button>
    </>
  )
}

export default Like_Btn