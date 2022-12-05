import React, {useEffect, useState} from 'react';
import './index.css'

const List_jokes_api = ({setTitleJokes, titleJokes, selected, selectlikeJokes, dislikeJoke}) => {

  const [listJokes, setListJokes] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/jokes')
    .then(res => res.json())
    .then(data => {
      setListJokes(
         data.filter(item => {
          if (item.genre == selected.theme) {
            return item
          }
        })
      )
      // setTitleJokes(
      //   titleJokes,
      //   listJokes
      // )
  })}, [selected])

  // setTitleJokes({
  //   ...titleJokes,
  //   listJokes
  // })

  console.log(titleJokes, 'comp')
  // console.log(listJokes, 'jokes')

  const apiElements = listJokes.map((item) => {
    return(
      <>
        <li 
          key={item.guid}
          className='list-jokes-item'>
          {item.text}
        </li>
        <button
          onClick={() => selectlikeJokes(item)}
          className='like-btn-joke'
          >
            like
        </button>
      </>
    )
  })

  const likeElements = selected.likeJokes.map((item) => {
    return(
      <>
        <li
          key={item.guid}
          className='list-jokes-item'>
          {item.text}
        </li>
        <button
        onClick={()=> dislikeJoke(item)}
        className='dislike-btn-joke'
        >
          dislike
        </button>
      </>
    )
  })

  return(
    <>
      {selected.selectLike == 0?
        <>
          <div className="add-joke">
            <input
              className='input-area'/>
            <button
              className='add-btn'>
              Add Joke
            </button>
          </div>
          <ol className='list-jokes'>
            {apiElements}
          </ol>
        </> :
        <ol className='list-jokes'>
          {likeElements}
        </ol>
        }
    </>
  )
}

export default List_jokes_api