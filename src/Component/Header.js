import React from "react";
import "./style.css";
import { Outlet,Link } from "react-router-dom";


function HeaderPage(){
    return(
        <>
                        {/* header start */}
                        <header>
                <nav className="navbar navbar-expand-md pinkcolor">
                <div className="container-fluid ">
                    <h3>
                    <a className="text-white text-decoration-none" href="index.html">
                        sandip
                    </a>
                    </h3>
                    <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link to="/home" className="nav-link active text-white" >Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/about" className="nav-link active text-white" >About</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/projects" className="nav-link active text-white" >Projects</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/contact" className="nav-link active text-white" >Contact me</Link>
                    </li>
                    </ul>
                </div>
                </nav>
            </header>
            {/* header end */}
        </>
    )
}

export default HeaderPage;