import React from "react";

function HogFilter({filter, sort, handleFilter, handleSort}) {
  return (
    <div>
        <input id="filter" type="checkbox" checked={filter} onChange={handleFilter}/>
        <label htmlFor="filter">
          Greased Pigs Only?
        </label>

        <label htmlFor="sortBy">
          Sort by:
        </label>
        <select
          id="sortBy"
          value={sort}
          onChange={handleSort}
          className="ui dropdown">
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
    </div>
  );
}

export default HogFilter;