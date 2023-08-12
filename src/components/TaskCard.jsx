import React from "react";

const TaskCard = ({ task, handleTaskToggle, handleTaskDelete }) => {
  return (
    <li className={`task-item ${task.completed ? "task-completed" : ""}`}>
      <label className="task-checkbox">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => handleTaskToggle(task.id)}
        />
      </label>
      <span className={`task-text ${task.completed ? "task-completed" : ""}`}>
        {task.title}
      </span>
      <button onClick={() => handleTaskDelete(task.id)}>Delete</button>
    </li>
  );
};

export default TaskCard;
