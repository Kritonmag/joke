import React, {useEffect, useState} from 'react';
import './index.css'

const List_jokes = ({selected, titleJokes}) => {

  const [listJokes, setListJokes] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/jokes')
    .then(res => res.json())
    .then(data => {
      setListJokes(data)
  })}, [selected])

  const element = listJokes.map((item) => {
    if (item.genre == selected.theme) {
      return(
        <li key={item.guid}>
          {item.text}
        </li>
      )
    }
  })

  return(
    <ol>
      {element}
    </ol>
  )
}

export default List_jokes