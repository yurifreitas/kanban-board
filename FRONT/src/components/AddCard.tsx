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
  const dispatch = useDispatch();

  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault();
    if (title) {
      dispatch(addCard({ listId: list.id, title }));
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
            placeholder="Insira o titulo da Sua Task.."
          />
          <button type="submit">Add Card</button>
          <button onClick={() => setShowForm(false)}>X</button>
        </form>
      ) : (
        <button onClick={() => setShowForm(true)}>+ Add Card</button>
      )}
    </div>
  );
};

export default AddCard;
