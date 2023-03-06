import styled from 'styled-components';

export const CardFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const CardFormInput = styled.input`
  width: 100%;
  font-size: 14px;
  border: none;
  border-bottom: 2px solid #ccc;
  margin-bottom: 10px;
  padding: 5px;
`;

export const CardFormTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  font-size: 14px;
  border: none;
  border-bottom: 2px solid #ccc;
  margin-bottom: 10px;
  padding: 5px;
  resize: none;
`;
export const CardFormTitleInput = styled.input`
  width: 100%;
  font-size: 14px;
  border: none;
  border-bottom: 2px solid #ccc;
  margin-bottom: 10px;
  padding: 5px;
`;
export const CardFormButton = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
color: #fff;
border: none;
border-radius: 4px;
font-size: 14px;
cursor: pointer;
width: 100%;
transition: background-color 0.2s ease;
`;

export const CardFormIcon = styled.button`
  margin-right: 5px;
  margin-right: 5px;
  font-size: 18px;
  vertical-align: middle;
`;
export const EditCardTitleInput = styled.input`
display: 'flex';
  width: 100%;
  font-size: 14px;
  border: none;
  border-bottom: 2px solid #ccc;
  margin-bottom: 10px;
  padding: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AddButton = styled.button`
  background-color: green;
  color: #fff;
  padding: 6px 12px;
  border: none;
  width:80%;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;
`;

export const CancelButton = styled.button`
  background-color: red;
  color: #fff;
  padding: 6px 12px;
  margin-left:10px;
  border: none;
  border-radius: 4px;
  
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;
`;
