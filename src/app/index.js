import React, {useEffect, useState} from 'react';
import List_jokes from '../list_jokes';
import List_title_jokes from '../list_title_jokes';
import './index.css'

const App = () => {

  const [titleJokes, setTitleJokes] = useState([])
  const [selected, setSelected] = useState(
    {
      theme: '3f43f270-563f-428b-a706-a6c29854dc47',
      guid: 1,
      select: true
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
      theme: name.guid,
      guid: selected.guid,
      select: !selected.select
    })
  console.log(selected)
  }

  const selectlikeJokes = (joke) => {
    joke.like = true
  }

  const selectDislikeJokes = (joke) => {
    console.log(joke)
    joke.like = false
  }

  return(
    <div className='wrapper'>
      <div>JOKES</div>
      <div className='main-contant'>
        <div className='title-content'>
          <List_title_jokes 
            titleJokes={titleJokes} 
            changeTitle={changeTitle}
            selected={selected}/>
        </div>
        <div className="list-content">
          <List_jokes 
            selected={selected}
            selectlikeJokes={selectlikeJokes}
            selectDislikeJokes={selectDislikeJokes}
          />
        </div>
      </div>
    </div>
  )
}

export default App
