import React from "react";
import Typography from "@material-ui/core/Typography";

type Props = {
  heading: string;
  children: React.ReactNode;
};

const Setting = ({ heading, children }: Props) => {
  return (
    <section>
      <Typography variant="h3">{heading}</Typography>
      {children}
    </section>
  );
};

export default Setting;
