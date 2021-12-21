import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';

const App = () =>{



  return(
<div className="App">
<Navbar />
  
  <Home/>

  <Footer />
</div>
  );
}

export default App;
