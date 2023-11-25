import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function NewTaskForm( { categories, onItemSubmit }) {

const [itemName, setItemName] = useState("");
const [itemCategory, setItemCategory] = useState("All");

  function handleNameChange(event) {
    setItemName(event.target.value);
  }

  function handleCategoryChange(event) {
    setItemCategory(event.target.value);
  }


  const renderCategoryOptions = (category) => {
    return <option key={category}>{category}</option>
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newTask = {
      id: uuidv4(),
      text: itemName,
      category: itemCategory,
    }
  

    onItemSubmit(newTask);

    setItemName("");
    setItemCategory("All");
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          type="text" 
          name="text"
          value={itemName}
          onChange={handleNameChange} />
      </label>
      <label>
        Category
        <select 
          name="category"
          value={itemCategory}
          onChange={handleCategoryChange}
          >
          {categories.map(renderCategoryOptions)}
        </select>
      </label>
      <input 
        type="submit" 
        value="Add task"
      />
    </form>
  );
}

export default NewTaskForm;
