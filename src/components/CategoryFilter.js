import React from "react";

function CategoryFilter({ selectedCategory, onCategoryChange, categories }) {


  function handleCategoryClick(category) {
    onCategoryChange(category);
  }

  const renderCategoryButton = (category) => {
    const isSelected = selectedCategory === category;
    const buttonClass = isSelected ? "selected" : "";

    return (
      <button
        key={category}
        className={buttonClass}
        onClick={() => handleCategoryClick(category)}
      >
        {category}
      </button>
    );
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(renderCategoryButton)}
    </div>
  );
}

export default CategoryFilter;
