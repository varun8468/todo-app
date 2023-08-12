import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    toggleTask: (state, action) => {
      const taskId = action.payload;
      const task = state.tasks.find(task => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { setTasks, toggleTask } = taskSlice.actions;

export default taskSlice.reducer;