import React, {useEffect, useState} from 'react';
import AddJoke from '../addJoke';
import './index.css'

const List_jokes = ({selected, selectlikeJokes}) => {

  const [listJokes, setListJokes] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/jokes')
    .then(res => res.json())
    .then(data => {
      setListJokes(data)
  })},[])

  console.log(listJokes)

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
    if (selected.theme == 'favorites' && item.like == true) {
      return(
        <li key={item.guid}
          className='list-jokes-item'>
          {item.text}
        </li>
      )
    }
  })

  return(
    <div>
      <div>
        <AddJoke listJokes={listJokes} setListJokes={setListJokes}/>
      </div>
      <ol className='list-jokes'>
        {element}
      </ol>
    </div>
  )
}

export default List_jokes
