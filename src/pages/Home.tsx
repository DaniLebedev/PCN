import React from "react";
import "./Home.scss";
import HeroImg from "../assets/images/background.jpg";
import HeroMan from "../assets/images/hero-men.gif";
const Home: React.FC = () => {
    return (
        <main className="home-page">
            <section>
                <div className="hero-block">
                    <div className="img-hero-block">
                        <img src={HeroImg} alt="" />
                    </div>
                    <div className="dark-hero-block"></div>
                    <div className="hero-container-text">
                        <div className="container">
                            <h1 className="main-hero-block">
                            PCN-101
                        </h1>
                        <h1 className="secondary-hero-block">
                            PCN-101
                        </h1>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
