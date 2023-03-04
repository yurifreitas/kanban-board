import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Card } from '../types';

interface UpdateCardTitlePayload {
  cardId: string;
  title: string;
}

interface RemoveCardPayload {
  cardId: string;
  listId: string;
}

interface AddCardPayload {
  listId: string;
  title: string;
}

interface CardState {
  entities: Record<string, Card>;
  ids: string[];
}

const initialCardState: CardState = {
  entities: {},
  ids: [],
};

const cardSlice = createSlice({
  name: 'cards',
  initialState: initialCardState,
  reducers: {
    addCard: (state, action: PayloadAction<AddCardPayload>) => {
      const { listId, title } = action.payload;
      const newCard: Card = {
        id: String(Date.now()),
        title,
        listId,
        labels:[],
      };
      state.entities[newCard.id] = newCard;
      state.ids.push(newCard.id);
    },
    updateCardTitle: (state, action: PayloadAction<UpdateCardTitlePayload>) => {
      const { cardId, title } = action.payload;
      const card = state.entities[cardId];
      if (card) {
        card.title = title;
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

export const { addCard, updateCardTitle, removeCard } = cardSlice.actions;

export default cardSlice.reducer;
