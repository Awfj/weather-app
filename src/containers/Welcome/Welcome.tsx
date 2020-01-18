import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppHeader from "../../components/AppHeader/AppHeader";
import DataLoader from "../../components/DataLoader/DataLoader";
import { APP_STRUCTURE } from "../../constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      marginTop: "1rem",
      "& form": {
        marginRight: "0"
      }
    }
  })
);

export type WelcomeProps = {
  isLoading: boolean;
  isError: boolean;
};

type Props = {
  search: JSX.Element;
} & WelcomeProps;

const Welcome = ({ search, isLoading, isError }: Props) => {
  const classes = useStyles();
  // console.log("welcome");
  return (
    <>
      <AppHeader heading={APP_STRUCTURE.forecast} />
      <DataLoader
        isLoading={isLoading}
        isError={isError}
        displayContent
        errorMessage={`We couldn't find your city automatically,
         you can still look for it manually.`}
      >
        <div className={classes.root}>{search}</div>
      </DataLoader>
    </>
  );
};

export default Welcome;
