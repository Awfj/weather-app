import React, { forwardRef } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

import { TButton } from "../../types";
import { ICON_BUTTON_FONT_SIZE } from "../../constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginLeft: "3px",
      fontSize: `calc(${ICON_BUTTON_FONT_SIZE} - 0.1rem)`
    }
  })
);

export type InputButtonProps = {
  label: string;
  type?: "submit";
  onClick?: () => void;
};

type Props = {
  children: React.ReactNode;
} & InputButtonProps;

const InputButton = forwardRef<TButton, Props>(
  ({ children, label, ...other }, ref) => {
    const classes = useStyles();
    return (
      <Tooltip title={label}>
        <IconButton
          aria-label={label}
          color="inherit"
          ref={ref}
          {...other}
          className={classes.root}
        >
          {children}
        </IconButton>
      </Tooltip>
    );
  }
);

export default InputButton;
