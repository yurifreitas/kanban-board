import styled from 'styled-components';

export const BoardContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: auto;
  display: flex;
  text-align: center;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
`;

export const ListContainer = styled.div`
  overflow: auto;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  min-height: 100px;
  width: 25%;
  height:100vh;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ListTitle = styled.h3`
  font-size: 18px;
  margin: 0;
  padding: 10px;
`;



export const AddCardButton = styled.button`
  border: none;
  background-color: #fff;
  color: #5e6c84;
  padding: 10px;
  text-align: center;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }

`;

export const FooterContainer = styled.div`
display: flex;
text-align: center;
justify-content: center;
padding: 10px;
background-color: #f2f2f2;
position: absolute; /* change this */
bottom: 0; /* add this */
left: 0;
right: 0;
`;

export const FooterButton = styled.button`
  border: none;
  background-color: #5aac44;
  color: #fff;
  display
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #519839;
  }
`;

export const FooterText = styled.p`
  font-size: 14px;
  margin: 0;
  padding: 10px;
`;

export const Card = styled.div<{ isDragging: boolean }>`
  background-color: #fff;
  box-shadow: ${({ isDragging }) => isDragging ? '0px 5px 10px rgba(0, 0, 0, 0.3)' : 'none'};
  padding: 10px;
  height: 25vh;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
  position: relative; /* add this */
`;

export const CardsContainer = styled.div`
padding: 10px;
flex: 1;
display: flex;
flex-direction: column;



`;
export const CardDetails = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
`;
export const CardFooter = styled.div`
display: flex;
justify-content: center; /* add this */
align-items: flex-end;
position: absolute;
bottom: 0;
width: 100%; /* add this */
 
`;

export const CardTitle = styled.h4`
font-size: 14px;
margin: 0;
`;

export const CardDescription = styled.div`
margin-top: 5px;
`;

export const EditCardTitleInput = styled.input`
  width: 100%;
  font-size: 14px;
  border: none;
  border-bottom: 2px solid #ccc;
  margin-bottom: 10px;
  padding: 5px;
`;



interface CardButtonProps {
  labelColor?: string;
}

export const CardButton = styled.button<CardButtonProps>`
  border: none;
  background-color: ${({ labelColor }) => labelColor ? `#${labelColor}` : '#5aac44'};
  color: #fff;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: ${({ labelColor }) => labelColor ? `#${labelColor}99` : '#519839'};
  }
`;

