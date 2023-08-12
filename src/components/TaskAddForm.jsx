import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../taskSlice";

const TaskAddForm = () => {
  const dispatch = useDispatch();
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleAddTask = () => {
    if (newTaskTitle.trim() !== "") {
      const newTask = {
        userId: 1,
        id: new Date().getTime(),
        title: newTaskTitle,
        completed: false,
      };
      dispatch(addTask(newTask));
      setNewTaskTitle("");
    }
  };

  return (
    <div className="add-task-container">
      <input
        className="add-task-input"
        type="text"
        placeholder="Add a new task"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
      />
      <button className="add-task-btn" onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskAddForm;
