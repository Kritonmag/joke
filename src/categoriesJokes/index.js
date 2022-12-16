import React, {useState, useEffect} from 'react';
import { CategoryJokes } from './categoryJokes';

export const CategoriesJokes = ({categories, onChangeCategories,listJokes}) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(()=> {
    if (categories.length > 0) {
      setSelectedCategory(categories[0]);
    }
  }, [ ]);

  // console.log(categories)

  return(
    <ul className='categories-jokes-container'>
      {categories.map((c, i) => {
        return <CategoryJokes
          key={i} 
          selected={(selectedCategory != null) && c.guid == selectedCategory.guid}
          category={c}
          listJokes={listJokes}
          onChangeSelected={(category, listJokes) =>{
            setSelectedCategory(category);
            onChangeCategories(category, listJokes);
          }}
          />
      })}
    </ul>
  )
}
