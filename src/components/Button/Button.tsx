import React from "react";
import "./Button.scss";
type ButtonMode = "header" | "header-end";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  mode?: ButtonMode;
}

const Button: React.FC<ButtonProps> = ({ text, className = "", mode = "primary", ...props }) => {
  let modeClass = "";

  switch (mode) {
    case "header":
      modeClass = "btn-header";
      break;
    case "header-end":
      modeClass = "btn-header-end";
      break;
  }

  return (
    <button className={`btn ${modeClass} ${className}`} {...props}>
      <h2>{text}</h2>
    </button>
  );
};

export default Button;