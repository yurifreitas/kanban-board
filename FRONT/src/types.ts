// types.ts

export interface Card {
  id: string;
  title: string;
  listId: string;
  description: string;

}

export interface List {
  id: string;
  title: string;
  cards: Card[];
}

export interface Board {
  id: string;
  title: string;
  lists: List[];
}

export interface MoveListAction {
  type: 'MOVE_LIST';
  sourceIndex: number;
  destinationIndex: number;
}

export interface MoveCardAction {
  type: 'MOVE_CARD';
  sourceListIndex: number;
  destinationListIndex: number;
  sourceIndex: number;
  destinationIndex: number;
}

export type BoardAction = MoveListAction | MoveCardAction;
