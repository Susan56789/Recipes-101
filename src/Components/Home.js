import React,{useEffect, useState} from 'react';
import './App.css';

const Home = () => {


    const APP_ID = process.env.REACT_APP_API_ID;
    const APP_KEY = process.env.REACT_APP_API_KEY;
    const exampleReq = `https://api.edamam.com/api/recipes/v2?type=public&q=pilau&app_id=${APP_ID}&app_key=${APP_KEY}`;
    
useEffect(()=>{
    console.log('Effect has been run');
})


    return (
        <div>
          <h1>RECIPES 101</h1>
<form className="search-form">
  <input className='search-bar' type='text' />
  <button className='search-button' type='submit'>Search</button>
</form>  
        </div>
    )
}

export default Home;
