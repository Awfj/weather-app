import React, { forwardRef } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { TInput, TChangeInput } from "../../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.primary.contrastText,
      backgroundColor: "transparent",
      border: "none",
      fontSize: "0.9rem",
      padding: "1em 0.8em",
      width: "100%",
      "&:focus": {
        boxShadow: `0 0 0 .2rem ${theme.palette.action.active}`
      }
    }
  })
);

export type InputFieldProps = {
  value?: string;
  onBlur?: () => void;
};

type Props = {
  placeholder: string;
  type?: "text" | "search";
  onChange?: TChangeInput;
} & InputFieldProps;

const InputField = forwardRef<TInput, Props>(function InputField(
  { value, type = "text", onBlur, onChange, placeholder },
  ref
) {
  const classes = useStyles();
  return (
    <input
      ref={ref}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      onBlur={onBlur}
      className={classes.root}
    />
  );
});

export default InputField;
