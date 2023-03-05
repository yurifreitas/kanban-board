import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../store/boardSlice';
import { List as ListType } from '../types';
import { BoardContainer, ListContainer, ListTitle, CardsContainer, AddCardButton, FooterContainer } from '../styles/styles';

interface Props {
  list: ListType;
}

const AddCard: React.FC<Props> = ({ list }) => {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (title) {
      dispatch(addCard({ listId: list.id, title, description }));
      setTitle('');
      setShowForm(false);
    }
  };

  return (
    <div>
      {showForm ? (
        <form onSubmit={handleAddCard}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter card title"
          />
          <button type="submit">Add Card</button>
          <button onClick={() => setShowForm(false)}>X</button>
        </form>
      ) : (
        <AddCardButton onClick={() => setShowForm(true)}>+ Add Card</AddCardButton>
      )}
    </div>
  );
};

export default AddCard;
