import React from "react";
import Star from "../images/star.png";

function Card(props) {
    console.log(props);
    console.log(props.item);
    console.log(props.name);
    let badgetext;
    if (props.item.openSpots === 0) {
        badgetext = "SOLD OUT";
    } else if (props.item.location === "Online") {
        badgetext = "ONLINE";
    }

    return (
        <div className="card">
            {badgetext && (<div className="card-badge">{badgetext}</div>)}
            <img src={`images/${props.item.img}`} className="card-img"></img>
            <div className="card-stats">
                <img src={Star} alt="star" className="card-star"></img>
                <span>{props.item.stats.rating} </span>
                <span className="gray">({props.item.stats.reviewCount}) . </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p>
                <span className="card-price">{props.item.price}$</span> /person
            </p>
        </div>
    );
}

export default Card;
