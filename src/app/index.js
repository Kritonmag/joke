import React, {useEffect, useState} from 'react';
import List_jokes from '../list_jokes';
import List_title_jokes_api from '../list_title_jokes';
import List_title_jokes from '../list_title_jokes';
import './index.css'
import List_jokes_api from './list_jokes_api';

const App = () => {

  const [titleJokes, setTitleJokes] = useState([])
  const [selected, setSelected] = useState(
    {
      theme: '3f43f270-563f-428b-a706-a6c29854dc47',
      likeJokes: [],
      selectLike: 0
    }
  )

  useEffect(() => {
    fetch('http://localhost:5000/api/genres')
    .then(res => res.json())
    .then(data => {
      setTitleJokes(data)
    })
  }, [])

  // console.log(titleJokes)

  const changeTitle = (name) => {
  setSelected(
    {
      theme: name.guid,
      likeJokes: selected.likeJokes,
      selectLike: 0
    }
  )
  // console.log(selected)
  }

  const selectLikeTitle = () => {
    setSelected(
      {
        theme: selected.theme,
        likeJokes: selected.likeJokes,
        selectLike: 1
      }
    )
    // console.log(selected)
  }

  const selectlikeJokes = (joke) => {
    setSelected(
      {
        theme: selected.theme,
        likeJokes: [...selected.likeJokes, joke],
        selectLike: 0 
      }
    )
    // console.log(selected)
  }

  const dislikeJoke = (joke) => {

    let listLikeJokes = [...selected.likeJokes]

    for (let i = 0; i < listLikeJokes.length; i++) {
      if (listLikeJokes[i].guid === joke.guid) {
        listLikeJokes.splice(i, 1)
      }
    }

    setSelected(
      {
        theme: selected.theme,
        likeJokes: listLikeJokes,
        selectLike: 1 
      }
    )
    // console.log(selected)

  }

  return(
    <div className='wrapper'>
      <div>JOKES</div>
      <div className='main-contant'>
        <div className='title-content'>
          <List_title_jokes titleJokes={titleJokes} changeTitle={changeTitle} 
            selected={selected} selectLikeTitle={selectLikeTitle}/>
        </div>
        <div className="list-content">
          {/* <List_jokes selected={selected} selectlikeJokes={selectlikeJokes} dislikeJoke={dislikeJoke}/> */}
        </div>
      </div>
    </div>
  )
}

export default App
