import React, {useEffect, useState} from 'react';
import List_jokes from '../list_jokes';
import List_title_jokes from '../list_title_jokes';
import './index.css'

const App = () => {

  const [titleJokes, setTitleJokes] = useState([])
  const [selected, setSelected] = useState(
    {
      theme: '3f43f270-563f-428b-a706-a6c29854dc47',
      likeJokes: []
    }
  )

  const btnLike = {
    guid: 'favorites',
    name: 'ИЗБРАННЫЕ'
  }

  useEffect(() => {
    fetch('http://localhost:5000/api/genres')
    .then(res => res.json())
    .then(data => {
      data = [...data, btnLike]
      setTitleJokes(data)
    })
  }, [])

  // console.log(titleJokes)

  const changeTitle = (name) => {
    setSelected({
      theme: name.guid
    })
  // console.log(selected)
  }

  const selectlikeJokes = (joke) => {
    setSelected({
      likeJokes: joke
    })
    console.log(selected)
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
          <List_title_jokes titleJokes={titleJokes} changeTitle={changeTitle}/>
        </div>
        <div className="list-content">
          <List_jokes 
            selected={selected}
            titleJokes={titleJokes}
            selectlikeJokes={selectlikeJokes}
          />
        </div>
      </div>
    </div>
  )
}

export default App
