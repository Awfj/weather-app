import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import LinkBox from "../LinkBox/LinkBox";
import { APP_STRUCTURE } from "../../constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    icon: {
      fontSize: "6.5rem"
    }
  })
);

const AddLocationBox = () => {
  const classes = useStyles();
  return (
    <LinkBox
      tooltip="Add Location"
      to={APP_STRUCTURE.settings}
      boxStyles={classes.box}
    >
      <AddIcon className={classes.icon} />
    </LinkBox>
  );
};

export default AddLocationBox;
