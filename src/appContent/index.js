import React, {useState, useEffect} from 'react';
import { CleanPlugin } from 'webpack';
import { CategoriesJokes } from '../categoriesJokes';
import { ListJokes } from '../listJokes';
import './index.css';

export const AppContent = () => {
  const hostPath = 'http://localhost:5000/api';
  const [categories, setCategories] = useState([{
    guid: 'favorites',
    name: 'Избранные'
  }]);

  useEffect(()=> {
    fetch(hostPath+'/genres')
      .then(res => res.json())
      .then(data => {
        setCategories([...data, ...categories]);
      });
  }, [])

  const [listJokes, setListJokes] = useState()

  useEffect(() => {
    fetch(hostPath+'/jokes')
      .then(res => res.json())
      .then(data => {
        setListJokes(data)
      })
  })

  const [selectCategory, setSelectCategory] = useState('')
  const [selectedJokes, setSelectedJokes] = useState(null)

  const onChangeCategories = (category, listJokes) => {
    console.log(category)
    setSelectCategory(category.guid)
    // if (listJokes.length == 0 || '') {
    //   setSelectedJokes('zero')
    // }
      let newList = []  
      let element = listJokes.map((item) => {
        if ((item.genre == selectCategory)) {
          newList.push(item)
          return newList
        }
      })    
      console.log(newList)
    setSelectedJokes(element)
    // console.log(selectCategory)
    // console.log(selectedJokes)
  }

  // console.log(selectCategory)
  // console.log(selectedJokes)

  const listItem = (item) => {
    console.log(item)
  }

  return(
    <div className='main-contant'>
      <div className='categories-container'>
        <CategoriesJokes categories={categories} 
          onChangeCategories={onChangeCategories}
          listJokes={listJokes}
          />
      </div>
      <div className='jokes-container'>
        <ListJokes listJokes={listJokes} 
        listItem={listItem} 
        selectCategory={selectCategory}
        />
      </div>
    </div>
  )
}
