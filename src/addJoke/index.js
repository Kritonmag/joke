import React, {useState} from 'react';
import './index.css'

const AddJoke = ({listJokes, setListJokes, selected}) => {

  const [value, setValue] = useState('')

  const saveJoke = () => {
    if (value == '' || value == ' '){
      return
    } else {
      let newJoke = {
        guid: ++selected.guid,
        genre: selected.theme,
        text: value
      }
      setListJokes(
        [newJoke,...listJokes]
      )
      setValue('')
    }
    console.log(listJokes[0],listJokes[1],listJokes[2])
  }

  return(
    <div>
      <input 
        placeholder='Введите шутку'
        value={value}
        onChange={(e)=>setValue(e.target.value)}
      />
      <button onClick={saveJoke}>Add Joke</button>
    </div>
  )

}

export default AddJoke