import React from 'react';
import '../App.css';



const Recipes = ({title, calories, image}) => {
    return (
        <div>
          <h1>{title}</h1> 
          <p>{calories}</p> 
          <img src={image} alt='' />
        </div>
    )
}

export default Recipes;