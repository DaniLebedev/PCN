import React, { use } from "react";
import "../../styles/global.scss"
import "./Header.scss";
import Logo from "../../assets/icons/pcn-101-2-logo.svg";
import  "../Button/Button"
import Button from "../Button/Button";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo-container">
                    <img src={Logo} alt="" />
                </div>
                <nav>
                    <Button text="Главная страница" mode="header"/>
                    <Button text="О нас" mode="header"/>
                    <Button text="Услуги" mode="header-end"/>
                </nav>
            </div>
        </header>
    );
};

export default Header;
