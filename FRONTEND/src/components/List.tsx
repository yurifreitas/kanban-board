import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { List as ListType } from '../types';
import CardComponent from './Card';
import AddCard from './AddCard';
import { BoardContainer, ListContainer, ListTitle } from '../styles/styles';

interface Props {
  list: ListType;
  index: number;
}

const List: React.FC<Props> = ({ list, index }) => {

  const isFirstList = index === 0;

  return (
    <Droppable droppableId={list.id}>
      {(provided) => (

        <div ref={provided.innerRef} {...provided.droppableProps}>
          <ListTitle>{list.title}</ListTitle>
          {list.cards.map((card, index) => (
            <CardComponent
              key={card.id}
              card={card}
              index={index}
              isFirstList={isFirstList}
            />
          ))}
          {provided.placeholder}

        </div>

      )}
    </Droppable>
  );
};

export default List;
