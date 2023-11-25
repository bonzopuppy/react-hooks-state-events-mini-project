import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");

 function changeCategory (category) {
   setSelectedCategory(category)
  }

  function deleteTask(taskText) {
    setTasks(tasks.filter((task) => task.text !== taskText));
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={selectedCategory} 
        onCategoryChange={changeCategory} 
      />
      <NewTaskForm categories={CATEGORIES}/>
      <TaskList 
        tasks={tasks} 
        selectedCategory={selectedCategory}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
