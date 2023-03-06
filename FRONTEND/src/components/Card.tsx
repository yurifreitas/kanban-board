import React, { useState, useEffect } from 'react';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { removeCard, updateCard, } from '../store/cardSlice';
import { Card as CardType } from '../types';
import { Card, CardDetails, CardTitle, CardFooter, CardButton, CardDescription, DeleteButton, EditButton } from '../styles/CardStyles';
import ReactMarkdown from 'react-markdown';

import {
  CardFormContainer,
  CardFormTitleInput,
  CardFormTextarea,
  CardFormButton,
  CardFormIcon,
} from '../styles/CardFormStyles';
import { AiOutlineDelete, AiOutlineClose} from 'react-icons/ai';
import { FaSave } from 'react-icons/fa';
interface Props {
  card: CardType;
  listId: string;
  index: number;
  isFirstList: boolean;
  isLastCard: boolean;
}

const CardComponent: React.FC<Props> = ({ listId, card, index, isFirstList, isLastCard }) => {
  const [showForm, setShowForm] = useState(false);
  const [cardState, setCardState] = useState({ title: card.title, description: card.description })
  const [isVisible, setIsVisible] = useState(true); // add isVisible state
  const dispatch = useDispatch();


  const handleSaveCard = () => {
    dispatch(updateCard({ cardId: card.id, newCard: { ...cardState, id: card.id, listId: card.listId } }));
    setShowForm(false);
  };

  const handleDeleteCard = () => {
    dispatch(removeCard({ cardId: card.id, listId: listId }));
    setIsVisible(false); // hide card when delete button is clicked
  };

  // render null when card is not visible
  if (!isVisible) {
    return null;
  }

  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided: DraggableProvided, snapshot) => (

        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          isDragging={snapshot.isDragging}
        >
          {showForm ? (
            <CardFormContainer>
              <CardFormTitleInput
                type="text"
                value={cardState.title}
                onChange={(e) => setCardState({ ...cardState, title: e.target.value })}
                autoFocus
                placeholder="Enter a title for this card..."
              />
              <CardFormTextarea
                placeholder="Enter a description for this card..."
                value={cardState.description}
                onChange={(e) => setCardState({ ...cardState, description: e.target.value })}
              />

            </CardFormContainer>
          ) : (
            <CardDetails onClick={() => setShowForm(true)}>
              <CardTitle>{cardState.title}
                {(!isFirstList && !showForm && !isLastCard) && (
                  <>
                    <DeleteButton onClick={handleDeleteCard}>
                      <AiOutlineDelete />

                    </DeleteButton>
                  </>
                )}
              </CardTitle>
              <CardDescription>
                <ReactMarkdown>{cardState.description ? cardState.description : ''}</ReactMarkdown>
              </CardDescription>
            </CardDetails>
          )}
          {!isFirstList && (
            <CardFooter>
              {showForm && (
                <CardFormButton>


                  <CardFormIcon onClick={handleSaveCard}><FaSave /></CardFormIcon>
                  <DeleteButton onClick={() => setShowForm(false)}>
                    <AiOutlineClose />

                  </DeleteButton>

                </CardFormButton>
              )}
              {!showForm && (
                <>
                  <EditButton onClick={() => setShowForm(true)}>Edit</EditButton>
                </>
              )}
              {isLastCard && (
                <CardButton onClick={() => setShowForm(true)}>Save</CardButton>
              )
              }

            </CardFooter>
          )}
        </Card>

      )}
    </Draggable>
  );
};

export default CardComponent;
