import React from "react";
import { NavLink } from "react-router-dom";


const Navbar=()=>{
let id=100;
    const  nav_links=[
        {
            path:'/',
            link:'About'
        },
        {
            path:'/contact',
            link:'Contact'
        },
        {
            path:'/careers',
            link:'Careers'
        },
        {
            path:'/news',
            link:'News'
        }
    ]
    return(
        <>
        <div id="navlinks">
        {
            nav_links.map((content)=>{
                return <NavLink key={id++} exact to={content.path}>{content.link}</NavLink>
            })
        }
        </div>
        


        </>
    );
}


export default Navbar;