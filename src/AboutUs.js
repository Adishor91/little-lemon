import React from "react";

const AboutUs = () => {
    return (
        <section className="about-us">
            <div className="about-us-container">
                <div className="about-us-text">
                    <h2>Our Story</h2>
                    <p>
                        Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. <br /><br />
                        To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
                    </p>
                </div>
                <div className="about-us-image">
                    <img src="/icons_assets/Mario and Adrian 1. jpg" alt="Mario and Adrian 1"/>
                    <img src="/icons_assets/Mario and Adrian 2. jpg" alt="Mario and Adrian 2"/>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;