import React from 'react';
import './index.css';

export const CategoryJokes = ({category, onChangeSelected, selected, listJokes}) => {
  let classNameElement = 'category-element';
  if (selected) {
    classNameElement += ' selected';
  }
  const onClickcategory = (category, listJokes) => {
    onChangeSelected(category, listJokes);
  }
  return(
    <li 
      key={category.guid}
      className={classNameElement}
      onClick={(e) =>{onClickcategory(category, listJokes)}}>
        {category.name}
    </li>
  )
}