import React from "react";

const FilterSort = ({ totalCount }) => {
  
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-2">
        <p className="text-xs uppercase text-gray-400">Sort By:</p>
        <select className="text-sm text-primary">
          <option value="">Date new to old</option>
          <option value="">Date new to old</option>
          <option value="">Date new to old</option>
        </select>
      </div>

      <p className="text-sm italic">{totalCount ? totalCount : 0} products</p>
    </div>
  );
};

export default FilterSort;
