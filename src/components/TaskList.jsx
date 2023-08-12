import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTasks, toggleTask } from "../taskSlice";

import "./TaskList.css";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const getAllTasks = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    dispatch(setTasks(res.data));
  };

  const handleTaskToggle = (id) => {
    dispatch(toggleTask(id));
  };

  useEffect(() => {
    const fetchData = async () => {
      await getAllTasks();
    };

    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="task-list-container">
      <h2 className="task-list-header">Task List</h2>
      <ul>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            handleTaskToggle={handleTaskToggle}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
