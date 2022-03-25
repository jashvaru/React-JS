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
                item={item}
            />
        );
    });

    return (
        <div>
            <Navbar />
            <HeroSection />
            <section className="card-list">{cardData}</section>
        </div>
    );
}

export default Application;
