import React from "react";
import "../../styles/global.scss";
import "./ServiceCard.scss";

interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> 
{
    text?: string;
    imgsrc?: string;
}
const ServiceCard: React.FC<ServiceCardProps> = ({text, imgsrc, ...props}) => {
    return (
        <div className="service-card" {...props}>
            
            <img src={imgsrc} alt="" />
            <p>{text}</p>
        </div>
    );
};

export default ServiceCard;
