import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ID, TasksState, Show } from '../../App/App.types';

const initialState: TasksState = {
  show: 'all',
  todos: [
    { id: self.crypto.randomUUID(), title: 'Complete online JavaScript course', isComplete: true },
    { id: self.crypto.randomUUID(), title: 'Jog around the park 3x', isComplete: false },
    { id: self.crypto.randomUUID(), title: '10 minutes meditation', isComplete: false },
    { id: self.crypto.randomUUID(), title: 'Read for 1 hour', isComplete: false },
    { id: self.crypto.randomUUID(), title: 'Pick up groceries', isComplete: false },
    { id: self.crypto.randomUUID(), title: 'Complete Todo App on Frontend Mentor', isComplete: false },
  ],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      const task = {
        id: self.crypto.randomUUID(),
        title: action.payload,
        isComplete: false,
      };

      state.todos.push(task);
    },

    completed: (state, action: PayloadAction<ID>) => {
      state.todos = state.todos.map((task) => (task.id === action.payload ? { ...task, isComplete: !task.isComplete } : task));
    },

    remove: (state, action: PayloadAction<ID>) => {
      state.todos = state.todos.filter((task) => task.id !== action.payload);
    },

    removeAllCompleted: (state) => {
      state.todos = state.todos.filter((task) => task.isComplete === false);
    },

    setFilter: (state, action: PayloadAction<Show>) => {
      state.show = action.payload;
    },

    newOrder: (state, action: PayloadAction<{ source: number; destination: number }>) => {
      const newTasks = [...state.todos];
      const [removed] = newTasks.splice(action.payload.source, 1);
      newTasks.splice(action.payload.destination, 0, removed);
      state.todos = newTasks;
    },
  },
});

export default tasksSlice.reducer;
export const { add, remove, completed, removeAllCompleted, setFilter, newOrder } = tasksSlice.actions;
