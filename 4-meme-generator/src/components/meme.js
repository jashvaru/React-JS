import React from "react";
import memeData from "../memeData";

export default function Meme() {
    // const [memeImg, setMemeImg] = React.useState("https://i.imgflip.com/30b1gx.jpg");

    const [meme, setMeme] = React.useState({
        toptext: "",
        bottomtext: "",
        randomImg: "https://i.imgflip.com/30b1gx.jpg",
    });

    const [allMemeImg, setAllMemeImg] = React.useState(memeData);

    function getMemeImg() {
        const memesArray = allMemeImg.data.memes;
        const randomNumber = Math.floor(Math.random() * 100);
        const url = memesArray[randomNumber].url;
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImg: url,
        }));
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
            <img src={meme.randomImg} alt="meme.png" className="meme-img"></img>
        </main>
    );
}
