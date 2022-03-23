import React from "react";
import Swimmer from "../images/swimmer.png";
import Star from "../images/star.png";

function Review() {
    return (
        <div className="card">
            <img src={Swimmer} alt="swimmer" className="card-img"></img>
            <div className="card-stats">
                <img src={Star} alt="star" className="card-star"></img>
                <span>5.0</span>
                <span className="gray">(6) . </span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons with Katie Zaferes</p>
            <p><span className="bold">136$</span> /person</p>
        </div>
    );
}

export default Review;
