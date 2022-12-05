import React from 'react';
import './index.css'

const List_title_jokes = ({titleJokes, changeTitle}) => {
  
  const elements = titleJokes.map((item) => {
    return(
      <li key={item.guid}
        onClick={() => changeTitle(item)}
        className='title-jokes-item'>
        {item.name}
      </li>
    )
  })

  return(
    <ul className='title-jokes'>
      {elements}
    </ul>
  )
}

export default List_title_jokes