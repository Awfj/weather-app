import React from "react";
import useWindowWidth from "../../hooks/useWindowWidth";
import { WindowWidthContext } from "../../contexts";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import PageHeader, {
  PageHeaderProps
} from "../../components/PageHeader/PageHeader";
import PageDrawer from "../../components/PageDrawer/PageDrawer";

type Props = {
  children: React.ReactNode;
} & PageHeaderProps;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& button": {
        "&:hover": {
          backgroundColor: theme.palette.action.hover
        },
        "&:focus": {
          boxShadow: `0 0 0 2px ${theme.palette.action.active}`
        },
        "&:active": {
          backgroundColor: theme.palette.action.active,
          color: theme.palette.primary.main
        }
      },
      "& main": {
        flexGrow: 1,
        padding: theme.spacing(7, 3),
        [theme.breakpoints.up("sm")]: {
          paddingTop: theme.spacing(8)
        }
      },
      "& form": {
        boxShadow: `0 0 0 1px ${theme.palette.primary.contrastText}`,
        "& input": {
          color: theme.palette.primary.contrastText
        },
        "& input, & button": {
          "&:focus": {
            boxShadow: `0 0 0 3px ${theme.palette.action.active}`
          }
        }
      }
    }
  })
);

const Page = ({ children, ...other }: Props) => {
  const classes = useStyles();
  const windowWidth = useWindowWidth();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  // console.log("page");
  return (
    <WindowWidthContext.Provider value={windowWidth}>
      <div className={classes.root}>
        <PageHeader
          heading="Forecast"
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
