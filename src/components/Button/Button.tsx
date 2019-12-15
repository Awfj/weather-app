import React from "react";
import styles from "./Button.module.scss";

type Props = {
  children: React.ReactNode;
  color?: "default" | "primary" | "secondary";
  inlineStyles?: object;
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "icon" | "text";
};

const Button = ({
  children,
  color = "default",
  inlineStyles,
  label,
  onClick,
  type = "button",
  variant = "icon"
}: Props) => {
  return (
    <button
      aria-label={label}
      className={`${styles.root} ${styles[variant]} ${styles[color]}`}
      style={inlineStyles}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
