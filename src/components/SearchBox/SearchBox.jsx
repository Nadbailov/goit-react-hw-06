import React from "react";
import s from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <input
      className={s.searchInput}
      type="text"
      value={filter}
      onChange={onFilterChange}
      placeholder="Search contacts"
    />
  );
};

export default SearchBox;
