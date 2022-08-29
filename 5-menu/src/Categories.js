import React from "react";

const Categories = ({ categories, filter, handleClick }) => {
  const setFilterClasses = (current, native) => {
    return current === native ? "filter-btn filter-btn-active" : "filter-btn";
  };

  const categoriesData = categories.map((category, index) => (
    <button
      key={index}
      onClick={() => handleClick(category)}
      className={setFilterClasses(filter, category)}
    >
      {category}
    </button>
  ));

  return (
    <div className="btn-container">
      <button
        className={setFilterClasses(filter, null)}
        onClick={() => handleClick(null)}
      >
        All
      </button>
      {categoriesData}
    </div>
  );
};

export default Categories;
