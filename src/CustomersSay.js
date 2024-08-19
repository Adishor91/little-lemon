import React from "react";

const CustomersSay = () => {
    return (
        <section className="testimonials">
            <div className="testimonials-container">
                <div className="title-subtitle">
                    <h2>Testimonials</h2>
                    <h4>Read what others are saying about us!</h4>
                </div>
                <div className="reviews">
                    <div className="review">
                        <div className="customer">
                            <img src="/icons_assets/nadia.jpg" alt="Customer 1" className="customer-image"/>
                            <div className="client-text">
                                <h5>Nadia</h5>
                                <span className="customer-review">
                                    4.5
                                    <img src="/icons_assets/star.png" alt="star" className="star"/>
                                </span>
                                <p>
                                    <span className="quote">“</span>
                                    Delicious flavors, fresh ingredients, and warm ambiance. The Greek Salad is exceptional! A must-visit for Mediterranean cuisine lovers.
                                    <span className="quote">”</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="review">
                        <div className="customer">
                            <img src="/icons_assets/paul.jpg" alt="Customer 2" className="customer-image"/>
                            <div className="client-text">
                                <h5>Paul</h5>
                                <span className="customer-review">
                                    5
                                    <img src="/icons_assets/star.png" alt="star" className="star"/>
                                </span>
                                <p>
                                    <span className="quote">“</span>
                                    Phenomenal dining experience! Every bite was bursting with flavor, and the atmosphere was cozy and inviting. Will definitely return!
                                    <span className="quote">”</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="review">
                        <div className="customer">
                            <img src="/icons_assets/curtis.jpg" alt="Customer 3" className="customer-image"/>
                            <div className="client-text">
                                <h5>Curtis</h5>
                                <span className="customer-review">
                                    5
                                    <img src="/icons_assets/star.png" alt="star" className="star"/>
                                </span>
                                <p>
                                    <span className="quote">“</span>
                                    Absolutely outstanding! Authentic flavors, generous portions, and impeccable service. Every dish was a delight. Highly recommend for a perfect Mediterranean experience!
                                    <span className="quote">”</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomersSay;
