import React from "react";
import Navbar from "../src/components/navbar";
import HeroSection from "../src/components/hero";
import Card from "../src/components/card";
import Data from "../src/data";

function Application() {
    const cardData = Data.map((item) => {
        return (
            <Card
                key={item.id}
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                country={item.location}
                title={item.title}
                price={item.price}
            />
        );
    });

    return (
        <div>
            <Navbar />
            <section className="card-list">{cardData}</section>
        </div>
    );
}

export default Application;
