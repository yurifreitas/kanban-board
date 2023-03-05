// store.ts

import { configureStore } from '@reduxjs/toolkit';
import { Board ,Card} from '../types';
import boardSlice from './boardSlice';
import cardSlice from './cardSlice';


export type RootState = {
  board: Board;
  card: Board;
};

const store = configureStore({
  reducer: {
    board: boardSlice,
    card: cardSlice,
  },
});

export default store;
