import React from "react";
import Star from "../images/star.png";

function Card(props) {
    return (
        <div className="card" >
            <img
                src={`images/${props.img}`}
                className="card-img"
            ></img>
            <div className="card-stats">
                <img src={Star} alt="star" className="card-star"></img>
                <span>{props.rating} </span>
                <span className="gray">({props.reviewCount}) . </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p>
                <span className="bold">{props.price}$</span> /person
            </p>
        </div>
    );
}

export default Card;
