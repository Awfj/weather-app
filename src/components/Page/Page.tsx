import React from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import { WindowWidthContext } from "../../contexts";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import PageHeader, {
  PageHeaderProps
} from "../PageHeader/PageHeader";
import PageDrawer from "../PageDrawer/PageDrawer";
import { TOOLBAR_HEIGHT, toolbarHeightMin } from "../../constants";

type Props = {
  children: React.ReactNode;
  heading: string;
} & PageHeaderProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& button": {
        "&:focus": {
          backgroundColor: theme.palette.action.selected
        },
        "&:hover": {
          backgroundColor: theme.palette.action.hover
        },
        "&:active": {
          backgroundColor: theme.palette.action.active,
          color: theme.palette.primary.main
        }
      },
      "& main": {
        flexGrow: 1,
        marginTop: toolbarHeightMin,
        padding: theme.spacing(0, 3),
        [theme.breakpoints.up("sm")]: {
          marginTop: TOOLBAR_HEIGHT
        }
      },
      "& form": {
        boxShadow: `0 0 0 1px ${theme.palette.primary.contrastText}`,
        "& input": {
          color: theme.palette.primary.contrastText,
          "&:focus": {
            boxShadow: `0 0 0 .2rem ${theme.palette.action.active}`
          }
        }
      }
    }
  })
);

const Page = ({ children, heading, ...other }: Props) => {
  const classes = useStyles();
  const windowWidth = useWindowWidth();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  // console.log("page");
  return (
    <WindowWidthContext.Provider value={windowWidth}>
      <div className={classes.root}>
        <PageHeader
          heading={heading}
          {...other}
          toggleDrawer={() => setIsDrawerOpen(!isDrawerOpen)}
        />
        <PageDrawer isDrawerOpen={isDrawerOpen} />
        <main>{children}</main>
      </div>
    </WindowWidthContext.Provider>
  );
};

export default Page;
