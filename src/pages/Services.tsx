import React from "react";
import "./Services.scss";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import HeroImg from "../assets/images/background.jpg";

const Services: React.FC = () => {
    return (
       <section className="services-section">
                <div className="container services-card">
                    <ServiceCard text="армамзамзам армамзамзам армамзамзам армамзамзам" imgsrc={HeroImg}/>
                    <ServiceCard text="армамзамзам армамзамзам армамзамзам армамзамзам" imgsrc={HeroImg}/>
                    <ServiceCard text="армамзамзам армамзамзам армамзамзам армамзамзам" imgsrc={HeroImg}/>
                    <ServiceCard text="армамзамзам армамзамзам армамзамзам армамзамзам" imgsrc={HeroImg}/>
                </div>
            </section>
    );
};

export default Services;
