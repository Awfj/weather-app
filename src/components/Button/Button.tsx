import React from "react";
import styles from "./Button.module.scss";

type Props = {
  children: React.ReactNode;
  customStyles?: object;
  label: string;
  onClick: any;
  type?: "button" | "submit" | "reset";
  variant?: "icon" | "text";
};

const Button = ({
  children,
  customStyles,
  label,
  onClick,
  type = "button",
  variant = "icon"
}: Props) => {
  return (
    <button
      aria-label={label}
      className={`${styles.root} ${styles[variant]}`}
      style={customStyles}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
