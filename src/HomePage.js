import React from "react";

const HomePage = () => {
    return (
        <section className="homepage flex">
            <div className="hero-text">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button className="reserve-button">Reserve a Table</button>
            </div>
            <img src="/icons_assets/restauranfood.jpg" alt="Homepage" className="hero-image" />
        </section>
    );
};

export default HomePage;
