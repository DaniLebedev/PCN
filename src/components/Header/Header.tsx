import { useTranslation } from "react-i18next";

import React from "react";
import "../../styles/global.scss";
import "./Header.scss";
import Logo from "../../assets/icons/pcn-101-2-logo.svg";
import Button from "../Button/Button";
import { SwitchLang } from "../Button/Button"
const Header: React.FC = () => {
    const { t } = useTranslation("header");

    return (
        <header className="header">
            <div className="container">
                <div className="logo-container">
                    <img src={Logo} alt="logo" />
                </div>
                <nav>
                    <Button text={t("buttons.home")} mode="header" path="/" />
                    <Button text={t("buttons.about")} mode="header" path="/about" />
                    <Button text={t("buttons.services")} mode="header" path="/services" />
                    <Button text={t("buttons.vacancies")} mode="header" path="/vacancies"/>
                    <Button text={"⚙"} mode="header" onClick={SwitchLang} fontSize = "2rem"/>
                
                </nav>
            </div>
        </header>
    );
};

export default Header;
