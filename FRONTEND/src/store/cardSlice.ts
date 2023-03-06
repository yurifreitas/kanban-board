import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card, List } from '../types';
import initialBoardState from '../data/initialBoardState.json';
import produce from 'immer';
interface RemoveCardPayload {
  cardId: string;
  listId: string;
}


const cardSlice = createSlice({
  name: 'cards',
  initialState: initialBoardState,
  reducers: {
    updateCard: (state, action: PayloadAction<{ cardId: string, newCard: Card }>) => {
      const { cardId, newCard } = action.payload;
      state.lists.forEach(list => {
        const cardIndex = list.cards.findIndex(card => card.id === cardId);
        if (cardIndex !== -1) {
          list.cards[cardIndex] = newCard;
        }

      });
      return state;
    },
    removeCard: (state, action: PayloadAction<RemoveCardPayload>) => {
      const { cardId, listId } = action.payload;
      
      const listIndex = state.lists.findIndex((list) => list.id === listId);
    
      if (listIndex !== -1) {
        const cards = state.lists[listIndex].cards.filter(card => card.id !== cardId);
        state.lists[listIndex].cards = cards;
      }
    
      // Return the entire state object, not just the lists array
      return state;
    },


  },
});

export const { removeCard, updateCard} = cardSlice.actions;

export default cardSlice.reducer;
