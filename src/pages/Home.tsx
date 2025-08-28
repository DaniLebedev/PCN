import { useTranslation } from "react-i18next";
import React from "react";
import "./Home.scss";
import HeroImg from "../assets/images/background.jpg";
import ServiceCard from "../components/ServiceCard/ServiceCard";
const Home: React.FC = () => {
    const { t } = useTranslation("home");
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
                            {t("hero-block.main")}
                        </h1>
                        <h1 className="secondary-hero-block">
                            {t("hero-block.secondary")}
                        </h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services-section">
                <div className="container services-card">
                    <ServiceCard text="армамзамзам армамзамзам армамзамзам армамзамзам" imgsrc={HeroImg}/>
                    <ServiceCard text="армамзамзам армамзамзам армамзамзам армамзамзам" imgsrc={HeroImg}/>
                    <ServiceCard text="армамзамзам армамзамзам армамзамзам армамзамзам" imgsrc={HeroImg}/>
                    <ServiceCard text="армамзамзам армамзамзам армамзамзам армамзамзам" imgsrc={HeroImg}/>
                </div>
            </section>
        </main>
    );
};

export default Home;
