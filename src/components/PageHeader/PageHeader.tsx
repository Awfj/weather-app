import React from "react";
import styles from "./PageHeader.module.scss";
import SearchIcon from "@material-ui/icons/Search";

type Props = {
  onSetLastLocation: (value: React.SetStateAction<string | null>) => void;
  title: string;
  theme?: string;
};

const PageHeader = React.memo(
  ({ onSetLastLocation, title, theme = "light" }: Props) => {
    const [searchQuery, setSearchQuery] = React.useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const query = searchQuery.trim().toLowerCase();
      if (query) {
        setSearchQuery("");
        onSetLastLocation(query);
      }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const query = event.currentTarget.value;
      setSearchQuery(query);
    };

    return (
      <header className={`${styles.root} ${styles[`theme--${theme}`]}`}>
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              value={searchQuery}
              onChange={handleChange}
              placeholder="Search"
              type="search"
            />
            <button aria-label="search">
              <SearchIcon />
            </button>
          </form>
        </div>
      </header>
    );
  }
);

export default PageHeader;
