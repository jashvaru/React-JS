import React from "react";
import memeData from "../memeData";

export default function Meme() {
    const [memeImg, setMemeImg] = React.useState("");

    function getMemeImg() {
        setMemeImg(memeData.data.memes[Math.floor(Math.random() * 100)].url);
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    className="form-input"
                    placeholder="Top text"
                ></input>
                <input
                    type="text"
                    className="form-input"
                    placeholder="Bottom text"
                ></input>
                <button onClick={getMemeImg} className="form-button">
                    Get a new Meme image 📺
                </button>
                
            </div>
            <img src={memeImg} alt="meme.png" className="meme-img"></img>
        </main>
    );
}
