import React from "react";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";
import AboutUs from "./AboutUs";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <section className="homepage flex">
                <div className="hero-text">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/booking">
                        <button className="reserve-button">Reserve a Table</button>
                    </Link>
                </div>
                <img src="/icons_assets/restauranfood.jpg" alt="Homepage" className="hero-image" />
            </section>
            <Specials />
            <CustomersSay />
            <AboutUs />
        </>
    );
};

export default HomePage;