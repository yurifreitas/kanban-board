  import React from 'react';
  import { Droppable } from 'react-beautiful-dnd';
  import { List as ListType } from '../types';
  import CardComponent from './Card';
  import AddCard from './AddCard';
  import { BoardInnerContainer, ListTitle } from '../styles/BoardStyles'

  interface Props {
    list: ListType;
    index: number;
  }

  const List: React.FC<Props> = ({ list, index }) => {

    const isFirstList = index === 0;
    const isLastCard = index === 3;

    return (
      <Droppable droppableId={list.id}>
        {(provided) => (

          <BoardInnerContainer ref={provided.innerRef} {...provided.droppableProps}>
            <ListTitle>{list.title}</ListTitle>
            {list.cards.map((card, index) => (
              <CardComponent
                listId={list.id}
                key={card.id}
                card={card}
                index={index}
                isFirstList={isFirstList}
                isLastCard={isLastCard }
              />
            ))}
            {provided.placeholder}

          </BoardInnerContainer>

        )}
      </Droppable>
    );
  };

  export default List;
