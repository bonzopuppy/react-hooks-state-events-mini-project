import React from "react";
import Task from "./Task";

function TaskList({ tasks, selectedCategory, onDeleteTask }) {
  
  const filterTasksByCateogry = (tasks, category) => {
    return category === "All" ? tasks : tasks.filter((task) => task.category === category);
  }

  const renderTask = (task) => {
    return (
      <Task 
        key={task.text} 
        text={task.text} 
        category={task.category}
        onDelete={onDeleteTask}
      />
    );
  };


  const visibleTasks = filterTasksByCateogry(tasks, selectedCategory);

  return (
    <div className="tasks">
      {visibleTasks.map(renderTask)}
    </div>
  );
}

export default TaskList;
