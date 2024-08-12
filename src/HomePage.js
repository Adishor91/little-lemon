import React from "react";

const HomePage = () => {
    return (
        <section className="homepage">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button class="reserve-button">Reserve a Table</button>
            <img src="/icons_assets/restauranfood.jpg" alt='Homepage'></img>
        </section>
    );
};

export default HomePage;