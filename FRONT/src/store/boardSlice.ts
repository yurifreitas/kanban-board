// boardSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Board, List, Card } from '../types';
import initialBoardState from '../data/initialBoardState.json';

interface AddCardPayload {
  listId: string;
  title: string;
}
interface UpdateCardTitlePayload {
  cardId: string;
  title: string;
}

const boardSlice = createSlice({
  name: 'board',
  initialState: initialBoardState,
  reducers: {
    moveList: (
      state,
      action: PayloadAction<{
        movedList: List;
        destinationListId: string;
      }>
    ) => {
      const { movedList, destinationListId } = action.payload;

      // Find the index of the moved list
      const movedListIndex = state.lists.findIndex((list) => list.id === movedList.id);

      // Remove the moved list from the old position
      const [removedList] = state.lists.splice(movedListIndex, 1);

      // Find the index of the destination list
      const destinationListIndex = state.lists.findIndex((list) => list.id === destinationListId);

      // Insert the moved list at the new position
      state.lists.splice(destinationListIndex, 0, removedList);
    },
    moveCard: (
      state,
      action: PayloadAction<{
        sourceListIndex: number;
        destinationListIndex: number;
        sourceIndex: number;
        destinationIndex: number;
      }>
    ) => {
      const { sourceListIndex, destinationListIndex, sourceIndex, destinationIndex } = action.payload;

      // Get the source and destination lists
      const sourceList = state.lists[sourceListIndex];
      const destinationList = state.lists[destinationListIndex];

      // Get the card that is being moved
      const [card] = sourceList.cards.splice(sourceIndex, 1);

      // Add the card to the destination list
      destinationList.cards.splice(destinationIndex, 0, card);

      // Update the Redux store
      state.lists[sourceListIndex] = sourceList;
      state.lists[destinationListIndex] = destinationList;
    },
    addList: (state, action: PayloadAction<List>) => {
      state.lists.unshift(action.payload);
    },
    addCard: (state, action: PayloadAction<AddCardPayload>) => {
      const { listId, title } = action.payload;
      const newCard: Card = {
        id: String(Date.now()),
        title: title,
        listId: listId, 
        labels: [], // add the listId property
      };
      const listIndex = state.lists.findIndex((list) => list.id === listId);
      state.lists[listIndex].cards.push(newCard);
    },
    removeList: (state, action: PayloadAction<string>) => {
      const listIndex = state.lists.findIndex((list) => list.id === action.payload);
      state.lists.splice(listIndex, 1);
    },

  },
});

export const { moveList, moveCard, addList, addCard, removeList,} = boardSlice.actions;

export default boardSlice.reducer;
