import React, { useState } from 'react';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { removeCard, updateCardTitle } from '../store/cardSlice';
import { Card as CardType, Label as LabelType } from '../types';
import { CardsContainer, AddCardButton, FooterContainer, Card, CardDetails, CardTitle, EditCardTitleInput, CardFooter, CardButton, Label } from '../styles/styles';

interface Props {
  card: CardType;
  index: number;
  isFirstList: boolean;
}

const CardComponent: React.FC<Props> = ({ card, index, isFirstList }) => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState(card.title);
  const dispatch = useDispatch();

  const handleSaveCard = () => {
    dispatch(updateCardTitle({ cardId: card.id, title }));
    setShowForm(false);
  };

  const handleDeleteCard = () => {
    dispatch(removeCard({ cardId: card.id, listId: card.listId }));
  };

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided: DraggableProvided) => (
        <CardsContainer>
          <Card ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} isDragging={provided.dragging}>
            {showForm ? (
              <div className="card-form">
                <EditCardTitleInput type="text" value={title} onChange={(e) => setTitle(e.target.value)} onBlur={handleSaveCard} autoFocus />
                <button onClick={handleSaveCard}>Save</button>
                <button onClick={() => setShowForm(false)}>X</button>
              </div>
            ) : (
              <CardDetails onClick={() => setShowForm(true)}>
                <CardTitle>{card.title}</CardTitle>
                {card.labels?.map((label: LabelType) => (
                  <Label key={label.id} labelColor={label.color}>{label.title}</Label>
                ))}
              </CardDetails>
            )}
            {!isFirstList && (
              <CardFooter>
                <CardButton className="card-edit" onClick={() => setShowForm(true)}>Edit</CardButton>
                <CardButton className="card-delete" onClick={handleDeleteCard}>Delete</CardButton>
              </CardFooter>
            )}
          </Card>
        </CardsContainer>
      )}
    </Draggable>
  );
};

export default CardComponent;
