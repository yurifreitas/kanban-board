import styled from 'styled-components';



export const Card = styled.div<{ isDragging: boolean }>`
  background-color: #fff;
  box-shadow: ${({ isDragging }) =>
    isDragging ? '0px 5px 10px rgba(0, 0, 0, 0.3)' : 'none'};
  padding: 10px;
  height: 25vh;
  margin: 10px;
  border-radius: 5px;
  display: flex;
  
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: auto;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
`;

export const CardTitle = styled.h4`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s ease-in-out;
  margin: 0;
  transition: box-shadow 0.2s ease-in-out;
`;

export const CardDescription = styled.div`
    width: 100%;
    height: 100px;
    font-size: 14px;

    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);


`;

export const EditButton = styled.button`
  background-color: green;
  color: #fff;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: green;
  }

  &:active {
    background-color: green;
  }
`;

export const DeleteButton = styled.button`
  background-color: #ff4d4d;
  color: #fff;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #d93939;
  }

  &:active {
    background-color: #b33333;
  }
`;
export const CardButton = styled.button`
background-color: green;
color: #fff;
padding: 6px 12px;
border: none;
border-radius: 4px;
font-size: 14px;
cursor: pointer;
width: 100%;
transition: background-color 0.2s ease;

&:hover {
  background-color: #d93939;
}

&:active {
  background-color: #b33333;
}
`;


export const AddCardButton = styled.button`
background-color: green;
color: #fff;
padding: 6px 12px;
border: none;
border-radius: 4px;
font-size: 14px;
cursor: pointer;
width: 100%;
transition: background-color 0.2s ease;

`;