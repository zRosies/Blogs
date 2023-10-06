import { useState } from "react";
import { Link , useLocation } from "react-router-dom";

const NavTest = () => {
    const [menuOpen,SetMenuOpen]= useState(false);
    const ToggleMenu = ()=>{
        SetMenuOpen(!menuOpen)
        console.log('aa')
        
    }
    const location = useLocation();
    const location2 = useLocation();
    const isHome= location.pathname==='/';
    const isCreate = location2.pathname==='/create';
    return ( 
        <nav className="navbar">
            <div className='anotherdiv'>
                <Link to="/"><h1>My Blog</h1></Link>
                <button id="btn" onClick={ToggleMenu}>&#9776;</button>
            </div>
            
            <div className={`links ${menuOpen ? "open" : ""}`}>
                <Link to="/" className={isHome ? 'active' : '' || !isCreate? 'active': ''}>Home</Link>
                <Link to="/create" className={isCreate? 'active': ''}>New Blog</Link>
                
            </div>
            
        </nav>
     );
}
 
export default NavTest;