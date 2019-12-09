import React from "react";
import styles from "./Page.module.scss";

type Props = {
  children: React.ReactNode;
  header: React.ReactNode;
  theme: string;
};

const Page = ({ children, header, theme }: Props) => {
  return (
    <div className={`${styles.root} ${styles[`theme--${theme}`]}`}>
      {header}
      <main>{children}</main>
    </div>
  );
};

export default Page;
