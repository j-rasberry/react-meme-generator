import React from "react";
import './../style/Header.css'

import TrollFace from './../images/troll-face.svg'

export default function Header() {
    return ( 
    <div className = "header" >
        <img src = {TrollFace}alt = "TrollFace"/>
         <h1> Meme Generator </h1> 
    </div>
    )
}