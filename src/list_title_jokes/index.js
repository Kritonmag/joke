import React, {useState} from 'react';
import React from 'react';
import './index.css'

const List_title_jokes = ({titleJokes, changeTitle, selected}) => {

  const [className, setClassName] = useState('title-jokes-item')
  
  // select-title-jokes-item

  const elements = titleJokes.map((item) => {
    return(
      <li key={item.guid}
        onClick={() => {changeTitle(item);
          selected.select == true ? 
          // console.log('true') : console.log('false')
          setClassName('select-title-jokes-item') : 
          setClassName('title-jokes-item')
        }}
        className={className}>
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