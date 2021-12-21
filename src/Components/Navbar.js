import React from 'react';
import '../App.css';

const Navbar = () => {
    return (
        <div>
           <nav className='navbar'> 
             <div className='logo'>Recipe 101</div>

             <div className='menu'>
                 <ul>
                     <li><a href='/'>Home</a></li>
                     <li><a href='about'>About</a></li>
                 </ul>
             </div>
           </nav>
        </div>
    );
}

export default Navbar;
