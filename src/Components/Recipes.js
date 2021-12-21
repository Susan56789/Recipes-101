import React from 'react';
import '../App.css';



const Recipes = ({title, calories, image, ingredients}) => {
    return (
        <div className='card' style={{"width": "18rem",}}>
          <div className='card-body'>
          <h3 className='card-title'>{title}</h3> 
            <ol className='list-group'>
            {ingredients.map(ingredient =>(
              <li className='list-group-item'>{ingredient.text}</li>
            ))}
            </ol>
            <p className='card-text'>Calories: {calories}</p> 
          <img className='card-image' src={image} alt='' />
          </div>
        </div>
    )
}

export default Recipes;
