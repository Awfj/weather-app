import React from "react";
import styles from "./Button.module.scss";

type Props = {
  children: React.ReactNode;
  inlineStyles?: object;
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "icon" | "text";
};

const Button = ({
  children,
  inlineStyles,
  label,
  onClick,
  type = "button",
  variant = "icon"
}: Props) => {
  return (
    <button
      aria-label={label}
      className={`${styles.root} ${styles[variant]}`}
      style={inlineStyles}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
