import React,{useEffect, useState} from 'react';
import '../App.css';
import Recipes from './Recipes';


const Home = () => {
 
const [recipes, setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery]=useState('pilau');


const getRecipes = async () =>{
    const exampleReq = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=2c87c283&app_key=55916114da3ad7402afc9731d23772f9`;
 
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


const updateSearch = e =>{
    setSearch(e.target.value);
}


const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
}



useEffect(()=>{
    getRecipes();
},[query]); //Runs once when page is renderd



    return (
        <div>
          <h1 className='header'>BROWSE OUR RECIPES</h1>
<form onSubmit={getSearch} className="search-form">
  <input className='search-bar' type='text' value={search} onChange={updateSearch} />
  <button className='search-button' type='submit'>Search</button>
</form>  

<div className='recipes'>
{recipes.map(recipe =>(
 <Recipes
 key={Math.random()*10000}
 title={recipe.recipe.label}
 calories={recipe.recipe.calories}
 image={recipe.recipe.image}
 ingredients={recipe.recipe.ingredients}
 
 />
))};
</div>
        </div>
    )
}


export default Home;
