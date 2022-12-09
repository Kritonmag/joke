import React, {useState} from 'react';
import './index.css'

const Like_Btn = ({selectlikeJokes,item}) => {

  const [isActive, setIsActive] = useState('')

  return(
    <>
      <button
        className={item.like == true ? 'like-btn' : ' '}
        onClick={()=>{selectlikeJokes(item);
          item.like == true ? setIsActive('like-btn') : setIsActive(' ');}}
        > 
        Like 
      </button>
    </>
  )
}

export default Like_Btn