import React, {useEffect, useState} from 'react';
import './index.css'

const List_jokes = ({selected, selectlikeJokes}) => {

  const [listJokes, setListJokes] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/jokes')
    .then(res => res.json())
    .then(data => {
      setListJokes(data)
  })}, [selected])

  console.log(selected.theme)

  const element = listJokes.map((item) => {
    if (item.genre == selected.theme) {
      return(
        <li key={item.guid}
        className='list-jokes-item'>
          <div>
            {item.text}
          </div>
          <button
            onClick={()=> selectlikeJokes(item)}
            className='like-btn-joke'
            >
            like
          </button>
        </li>
      )
    }
  })

  return(
    <div>
      <div className="add-joke">
        <input
          className='input-area'/>
        <button
          className='add-btn'>
          Add Joke
        </button>
      </div>
      <ol className='list-jokes'>
        {element}
      </ol>
    </div>
  )
}

export default List_jokes
