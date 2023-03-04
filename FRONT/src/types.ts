// types.ts
export interface Label {
  id: string;
  title: string;
  color: string;

}
export interface Card {
  id: string;
  title: string;
  listId: string;
  labels: Label[];
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
