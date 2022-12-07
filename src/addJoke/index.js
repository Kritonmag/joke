import React, {useState} from 'react';
import './index.css'

const AddJoke = ({listJokes, setListJokes, selected}) => {

  const [value, setValue] = useState('')

  const saveJoke = () => {
    if (value == '' || value == ' '){
      return
    } else {
      let guid = 1
      setListJokes(
        [{
          guid: guid++,
          genre: selected.theme,
          text: value
        },...listJokes]
      )
      setValue('')
    }
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