import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card } from '../types';

interface UpdateCardPayload {
  cardId: string;
  title: string;
  description?: string;
}

interface RemoveCardPayload {
  cardId: string;
  listId: string;
}

interface CardState {
  entities: Record<string, Card>;
  ids: string[];
  lists: [];
}

const initialCardState: CardState = {
  entities: {},
  ids: [],
  lists: [],
};

const cardSlice = createSlice({
  name: 'cards',
  initialState: initialCardState,
  reducers: {
    updateCardTitle: (state, action: PayloadAction<UpdateCardPayload>) => {
      const { cardId, title, description } = action.payload;
      const card = state.entities[cardId];
      if (card) {
        card.title = title;
        if (description !== undefined) {
          card.description = description;
        }
      }
    },
    removeCard: (state, action: PayloadAction<RemoveCardPayload>) => {
      const { cardId, listId } = action.payload;
      const cardIndex = state.ids.findIndex((id) => id === cardId);
      if (cardIndex === -1) {
        console.error(`Card with id ${cardId} not found`);
        return;
      }
      delete state.entities[cardId];
      state.ids.splice(cardIndex, 1);
    },
  },
});

export const { updateCardTitle, removeCard } = cardSlice.actions;

export default cardSlice.reducer;
