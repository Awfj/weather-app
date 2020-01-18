import React from "react";
import {
  NavLink as RouterLink,
  LinkProps as RouterLinkProps
} from "react-router-dom";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { ACTIVE_LINK_BORDER_SIZE } from "../../constants";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderLeft: `${ACTIVE_LINK_BORDER_SIZE} solid transparent`
    },
    active: {
      borderColor: theme.palette.secondary.main
    }
  })
);

type Props = {
  icon?: React.ReactElement;
  primary: string;
  to: string;
};

const ListItemLink = ({ icon, primary, to }: Props) => {
  const classes = useStyles();
  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<RouterLinkProps, "to">>((itemProps, ref) => (
        <RouterLink
          to={`/${to}`}
          ref={ref}
          activeClassName={classes.active}
          {...itemProps}
        />
      )),
    [to, classes.active]
  );
  return (
    <li>
      <ListItem button component={renderLink} className={classes.root}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
};

export default ListItemLink;
