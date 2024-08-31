import React from "react";
import { Link } from "react-router-dom";

const Specials = () => {
    return (
        <section className="specials">
            <div className="title-and-button">
                <h1>This weeks specials!</h1>
                <Link to ="/our-menu">
                    <button className="menu-button">Online menu</button>
                </Link>
            </div>
            <div className="food-container">
                <div className="foods">
                    <img src="/icons_assets/greek salad.jpg" alt="greek-salad" className="foods-image"/>
                    <div className="food-text">
                        <div className="title-and-price">
                            <h4 className="title">Greek Salad</h4>
                            <h4 className="price">$12.99</h4>
                        </div>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                        <div className="button-and-icon">
                            <button>Order for delivery</button>
                            <img src="/icons_assets/basket.svg" width="20" height="20" viewBox="0 0 46 47" fill="none" alt="basket"/>
                        </div>
                    </div>
                </div>
                <div className="foods">
                    <img src="/icons_assets/bruchetta.jpg" alt="bruchetta" className="foods-image"/>
                    <div className="food-text">
                        <div className="title-and-price">
                            <h4 className="title">Bruchetta</h4>
                            <h4 className="price">$5.99</h4>
                        </div>
                        <p>Au Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <div className="button-and-icon">
                            <button>Order for delivery</button>
                            <img src="/icons_assets/basket.svg" width="20" height="20" viewBox="0 0 46 47" fill="none" alt="basket"/>
                        </div>
                    </div>
                </div>
                <div className="foods">
                    <img src="/icons_assets/lemon dessert.jpg" alt="lemon-dessert" className="foods-image"/>
                    <div className="food-text">
                        <div className="title-and-price">
                            <h4 className="title">Lemon Dessert</h4>
                            <h4 className="price">$5.00</h4>
                        </div>
                        <p>Thie comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <div className="button-and-icon">
                            <button>Order for delivery</button>
                            <img src="/icons_assets/basket.svg" width="20" height="20" viewBox="0 0 46 47" fill="none" alt="basket"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Specials;