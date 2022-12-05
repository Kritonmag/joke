import React, {useState} from 'react';
import './index.css'

const AddJoke = ({listJokes, setListJokes}) => {

  const [value, setValue] = useState('')

  const saveJoke = () => {
    setListJokes(
      [...listJokes, {
        guid: 1,
        genre: '3f43f270-563f-428b-a706-a6c29854dc47',
        text: value
      }]
    )
    setValue('')
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