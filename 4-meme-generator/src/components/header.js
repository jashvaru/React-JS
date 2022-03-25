import React from "react";
import TrollFace from "../images/TrollFace.png"


export default function Header () {
  return(
    <header className="header">
        <img src={TrollFace} alt="troll_face" className="header-img"></img>
        <h2 className="header-title">Meme Generator</h2>
        <h4 className="header-project">React project - 4</h4>
    </header>
  )
}

