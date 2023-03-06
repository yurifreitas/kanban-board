import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../store/boardSlice';
import { List as ListType } from '../types';
import { AddCardButton } from '../styles/CardStyles';
import {
  CardFormContainer,
  ButtonContainer,
  CancelButton,
  CardFormInput
} from '../styles/CardFormStyles';
import { AiOutlineDelete, AiOutlineClose } from 'react-icons/ai';
import { AddButton } from '../styles/CardFormStyles';
import { FaSave } from 'react-icons/fa';
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
        <CardFormContainer onSubmit={handleAddCard}>

          <CardFormInput
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Insira o titulo para seu card"
          />< ButtonContainer>
            < AddButton type="submit"> <FaSave /> Salvar</ AddButton>
            <CancelButton onClick={() => setShowForm(false)}>
              <AiOutlineClose />

            </ CancelButton>
          </ButtonContainer>
        </CardFormContainer>
      ) : (
        <AddCardButton onClick={() => setShowForm(true)}><FaSave /> </AddCardButton>
      )}
    </div>
  );
};

export default AddCard;
