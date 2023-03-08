import React, { useState, useEffect } from "react";
import "./Filter.css";

const Filter = ({ onFilterChange }) => {
  const [search, setSearch] = useState(localStorage.getItem("search") || "");

  const handleSearchChange = (event) => {
    const newSearchValue = event.target.value;
    setSearch(newSearchValue);
  };

  useEffect(() => {
    onFilterChange(search);
    localStorage.setItem("search", search);
  }, [search, onFilterChange]);

  return (
    <section className="filter">
      <form className="filter__form">
        <label className="filter__search">
          <input
            name="search"
            type="search"
            placeholder="Filter by name..."
            value={search}
            onChange={handleSearchChange}
          />
        </label>
      </form>
    </section>
  );
};

export default Filter;
