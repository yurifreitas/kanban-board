import React, { useState } from 'react';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { removeCard, updateCardTitle } from '../store/cardSlice';
import { Card as CardType } from '../types';
import { CardsContainer, Card, CardDetails, CardTitle, EditCardTitleInput, CardFooter, CardButton, CardDescription } from '../styles/styles';
import ReactMarkdown from 'react-markdown';

interface Props {
  card: CardType;
  index: number;
  isFirstList: boolean;
}

const CardComponent: React.FC<Props> = ({ card, index, isFirstList }) => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState(card.title);
  const [description, setDescription] = useState(card.description);
  const dispatch = useDispatch();

  const handleSaveCard = () => {
    dispatch(updateCardTitle({ cardId: card.id, title, description }));
    setShowForm(false);
  };

  const handleDeleteCard = () => {
    dispatch(removeCard({ cardId: card.id, listId: card.listId }));
  };

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided: DraggableProvided, snapshot) => (
        <CardsContainer>
          <Card
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
          >
            {showForm ? (
              <div className="card-form">
                <EditCardTitleInput
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  onBlur={handleSaveCard}
                  autoFocus
                />
                <textarea
                  className="card-form-textarea"
                  placeholder="Enter a description for this card..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <div className="card-form-buttons">
                  <button className="card-form-button" onClick={handleSaveCard}>Save</button>
                  <button className="card-form-button" onClick={() => setShowForm(false)}>Cancel</button>
                </div>
              </div>
            ) : (
              <CardDetails onClick={() => setShowForm(true)}>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>
                  <ReactMarkdown>{card.description ? card.description : ''}</ReactMarkdown>
                </CardDescription>
              </CardDetails>
            )}
            {!isFirstList && (
              <CardFooter>
                <CardButton onClick={() => setShowForm(true)}>Edit</CardButton>
                <CardButton onClick={handleDeleteCard} labelColor="red">
                  Delete
                </CardButton>
              </CardFooter>
            )}
          </Card>
        </CardsContainer>
      )}
    </Draggable>
  );
};

export default CardComponent;
