import React from 'react';
import './index.css'

const List_title_jokes_api = ({titleJokes, changeTitle, selected, selectLikeTitle}) => {
  
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
      <li className='title-jokes-item'
      key='qwerty'
      onClick={() => selectLikeTitle()}
      >
        Избранные
      </li>
    </ul>
  )
}

export default List_title_jokes_api