import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.scss";
import i18next from "i18next";

type ButtonMode = "header" | "header-end";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  mode?: ButtonMode;
  path?: string; // путь для навигации
  fontSize?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  className = "", 
  mode = "header", 
  path, 
  fontSize = "1ram",
  onClick, // кастомный клик
  ...props 
}) => {
  const navigate = useNavigate();

  let modeClass = "";
  switch (mode) {
    case "header":
      modeClass = "btn-header";
      break;
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (path) {
      navigate(path); // встроенная навигация
    }
    if (onClick) {
      onClick(e); // вызов пользовательского onClick
    }
  };

  return (
    <button 
      className={`btn ${modeClass} ${className}`} 
      onClick={handleClick} 
      {...props}
    >
      <h2 style={{ fontSize }}>{text}</h2>
    </button>
  );
};
export function SwitchLang()
{
  //ru - kz - us
  let current = i18next.language;
  switch(current)
  {
    case "ru":
      i18next.changeLanguage("kz");
    break;

    case "kz":
      i18next.changeLanguage("us");
    break;

    case "us":
      i18next.changeLanguage("ru");
    break;
  }
}
export default Button;
