import React from "react";
import {
  NavLink as RouterLink,
  LinkProps as RouterLinkProps
} from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { DEFAULT_ROUTE_SLICE } from "../../constants";

type Props = {
  icon?: React.ReactElement;
  primary: string;
  to: string;
};

const ListItemLink = ({ icon, primary, to }: Props) => {
  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<RouterLinkProps, "to">>((itemProps, ref) => (
        <RouterLink
          to={`${DEFAULT_ROUTE_SLICE}/${to}`}
          ref={ref}
          {...itemProps}
        />
      )),
    [to]
  );
  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
};

export default ListItemLink;
