import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, setTasks, toggleTask } from "../taskSlice";

import "./style.css";
import TaskCard from "./TaskCard";
import TaskAddForm from "./TaskAddForm";

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

  const handleTaskDelete = (id) => {
    dispatch(deleteTask(id));
  };

  useEffect(() => {
    const fetchData = async () => {
      await getAllTasks();
    };

    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="task-list-container">
      <TaskAddForm />
      <h2 className="task-list-header">Task List</h2>
      <ul>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            handleTaskToggle={handleTaskToggle}
            handleTaskDelete={handleTaskDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
