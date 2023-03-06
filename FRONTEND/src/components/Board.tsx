import React from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Board } from '../types';
import { moveList, moveCard } from '../store/boardSlice';
import List from './List';
import AddCard from './AddCard';
import { BoardContainer, ListContainer, FooterContainer } from '../styles/BoardStyles';



const BoardComponent: React.FC = () => {
  const board = useSelector<RootState, Board>((state) => state.board);
  const dispatch = useDispatch();

  const handleDragEnd = (result: DropResult) => {
    const { source, destination, draggableId, type } = result;

    // Check if the draggable was dropped outside a droppable element
    if (!destination) {
      return;
    }

    // Check if the draggable was dropped in a different droppable
    if (source.droppableId !== destination.droppableId) {
      // Check if the draggable is a list or a card
      if (type === 'list') {
        // Get the list that was moved
        const movedList = board.lists.find((list) => list.id === source.droppableId);

        // Dispatch the moveList action to update the Redux store
        dispatch(moveList({
          movedList: movedList!,
          destinationListId: destination.droppableId,
        }));
      } else {
        // Get the source and destination lists
        const sourceList = board.lists.find((list) => list.id === source.droppableId);
        const destinationList = board.lists.find((list) => list.id === destination.droppableId);

        // Get the card that was moved
        const movedCard = sourceList!.cards.find((card) => card.id === draggableId);

        // Dispatch the moveCard action to update the Redux store
        dispatch(moveCard({
          sourceListIndex: board.lists.findIndex((list) => list.id === source.droppableId),
          destinationListIndex: board.lists.findIndex((list) => list.id === destination.droppableId),
          sourceIndex: source.index,
          destinationIndex: destination.index,
        }));
      }
    } else {
      // Check if the draggable is a card
      if (type === 'card') {
        // Get the source list
        const sourceList = board.lists.find((list) => list.id === source.droppableId);

        // Dispatch the moveCard action to update the Redux store
        dispatch(moveCard({
          sourceListIndex: board.lists.findIndex((list) => list.id === source.droppableId),
          destinationListIndex: board.lists.findIndex((list) => list.id === destination.droppableId),
          sourceIndex: source.index,
          destinationIndex: destination.index,
        }));
      }
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <BoardContainer>
        {board.lists.map((list, index) => (
          <ListContainer key={list.id}>
            <List list={list} index={index} />


            {index === 0 && (
              <FooterContainer>

                <AddCard list={list} />

              </FooterContainer>
            )}




          </ListContainer>


        ))}
      </BoardContainer>
    </DragDropContext>
  );

};

export default BoardComponent;
