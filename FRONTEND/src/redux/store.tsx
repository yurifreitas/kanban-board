import { createStore } from 'redux';

interface Task {
  id: number;
  title: string;
  description: string;
}

interface Board {
  id: number;
  title: string;
  tasks: Task[];
}

interface AppState {
  boards: Board[];
}

const initialState: AppState = {
  boards: [
    {
      id: 1,
      title: 'To Do',
      tasks: [
        { id: 1, title: 'Task 1', description: 'Do this task' },
        { id: 2, title: 'Task 2', description: 'Do that task' },
      ],
    },
    {
      id: 2,
      title: 'In Progress',
      tasks: [{ id: 3, title: 'Task 3', description: 'Do this task' }],
    },
    {
      id: 3,
      title: 'Done',
      tasks: [{ id: 4, title: 'Task 4', description: 'Do this task' }],
    },
  ],
};

function appReducer(state = initialState, action: any) {
  // Handle actions here
  return state;
}

const store = createStore(appReducer);

export default store;
