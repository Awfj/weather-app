import React from "react";
import styles from "./PageHeader.module.scss";
import SearchIcon from "@material-ui/icons/Search";

type Props = {
  onGetData: (city: string) => void;
  title: string;
  theme?: string;
};

const PageHeader = ({ onGetData, title, theme = "light" }: Props) => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (query) {
      onGetData(query);
      setSearchQuery("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.currentTarget.value;
    setSearchQuery(query);
  };

  return (
    <header className={`${styles.root} ${styles[`theme--${theme}`]}`}>
      <h1>{title}</h1>
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
};

export default PageHeader;
