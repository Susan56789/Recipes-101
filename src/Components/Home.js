import React,{useEffect, useState} from 'react';
import '../App.css';
import Recipes from './Recipes';


const Home = () => {
 
const [recipes, setRecipes] = useState([]);


const getRecipes = async () =>{
    const exampleReq = 'https://api.edamam.com/api/recipes/v2?type=public&q=pilau&app_id=2c87c283&app_key=55916114da3ad7402afc9731d23772f9';
 
    try{
        const response =  await fetch(exampleReq, {
            method:'GET',
            mode:'cors',
        })
        .then(res => 
           res.json()
        )
        .then(data => {

         return data.hits;
            // console.log(data.hits)
        })

       setRecipes(response);
    }
     catch(e){
      //  console.log("We have an error")
        console.log(e)
    }
};


useEffect(()=>{
    getRecipes();
},[]); //Runs once when page is renderd



    return (
        <div>
          <h1>RECIPES 101</h1>
<form className="search-form">
  <input className='search-bar' type='text' />
  <button className='search-button' type='submit'>Search</button>
</form>  

{recipes.map(recipe =>(
 <Recipes
 key={Math.random()*10000}
 title={recipe.recipe.label}
 calories={recipe.recipe.calories}
 image={recipe.recipe.image}
 />
))};
        </div>
    )
}

export default Home;
