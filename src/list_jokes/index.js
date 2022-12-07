import React, {useEffect, useState} from 'react';
import AddJoke from '../addJoke';
import Dislike_Btn from '../dislike-btn';
import Like_Btn from '../like-btn';
import './index.css'

const List_jokes = ({selected, selectlikeJokes,selectDislikeJokes}) => {

  const [listJokes, setListJokes] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/jokes')
    .then(res => res.json())
    .then(data => {
      setListJokes(data)
  })},[])

  // console.log(listJokes)

  const element = listJokes.map((item) => {
    if (item.genre == selected.theme) {
      // console.log(item)
      return(
        <li key={item.guid}
        className='list-jokes-item'>
          <div>
            {item.text}
          </div>
          <Like_Btn
            selectlikeJokes={selectlikeJokes}
            item={item}
            />
        </li>
      )
    }
    if (selected.theme == 'favorites' && item.like == true) {
      return(
        <li key={item.guid}
          className='list-jokes-item'>
          <div>
            {item.text}
          </div>
          <div>
            <Dislike_Btn 
            selectDislikeJokes={selectDislikeJokes}
            item={item}/>
          </div>
        </li>
      )
    }
  })

  return(
    <div>
      <div>
        <AddJoke 
          listJokes={listJokes} 
          setListJokes={setListJokes}
          selected={selected}/>
      </div>
      <ol className='list-jokes'>
        {element}
      </ol>
    </div>
  )
}

export default List_jokes
