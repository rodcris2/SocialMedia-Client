import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { logout } from "../../authContext/AuthActions"
import { AuthContext } from "../../authContext/AuthContext"
import "./navbar.css";

const Navbar = () => {
    const[isScrolled, setIsScrolled] = useState(false);
    const {dispatch} = useContext(AuthContext);

    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0? false : true);
        return () => (window.onscroll = null); 
    };

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="home-header-wrap">
                <div className="home-header">
                    <span className='home-header-logo'>
                        <p className='home-logo'>
                            FMF Podcast  
                        </p>
                        {localStorage.getItem("_45744549826894_admin_kjgshwf") && (
                            <>
                                <div className="mode-buttons">
                                    <Link to={{pathname:"/"}}>
                                        <button className="mode-button Home">Home</button>
                                    </Link>
                                </div>
                                <div className="mode-buttons">
                                    <Link to={{pathname:"/admin"}}>
                                        <button className="mode-button Admin">Admin</button>
                                    </Link>
                                </div>
                            </>
                        )}
                        <div className="sign-out-button">
                            <a href='/register' className='sign-out-blue-button' onClick={() => dispatch(logout())}>Sign Out</a>   
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Navbar