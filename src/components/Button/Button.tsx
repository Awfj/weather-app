import React from "react";
import styles from "./Button.module.scss";
import { TButton } from "../../types";

export type ButtonProps = {
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "icon" | "text";
  inlineStyles?: object;
};

interface Props extends ButtonProps {
  children: React.ReactNode;
  label: string;
  customStyles?: any;
}

const Button = React.forwardRef<TButton, Props>(
  (
    {
      children,
      disabled = false,
      inlineStyles,
      label,
      onClick,
      type = "button",
      variant = "icon",
      customStyles
    },
    ref
  ) => {
    let combinedStyles = `${styles.root} ${styles[variant]}`;
    if (customStyles) combinedStyles += ` ${customStyles}`;

    return (
      <button
        aria-label={label}
        disabled={disabled}
        className={combinedStyles}
        ref={ref}
        style={inlineStyles}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    );
  }
);

export default Button;
