import styled from 'styled-components';

export const BoardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  background-color: #f2f2f2;
`;

export const ListContainer = styled.div`
  margin-right: 20px;
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  width: 300px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
`;

export const ListTitle = styled.h3`
  font-size: 18px;
  margin: 0;
  padding: 10px;
`;

export const CardsContainer = styled.div`
  padding: 10px;
  flex: 1;
  overflow-y: auto;
`;

export const AddCardButton = styled.button<{ isFirstList: boolean }>`
  border: none;
  background-color: #fff;
  color: #5e6c84;
  padding: 10px;
  text-align: left;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
  ${({ isFirstList }) => isFirstList && `
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: bold;
  `}
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #f2f2f2;
`;

export const FooterButton = styled.button`
  border: none;
  background-color: #5aac44;
  color: #fff;
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
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const CardDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTitle = styled.h4`
  font-size: 14px;
  margin: 0;
  margin-right: 10px;
`;

export const EditCardTitleInput = styled.input`
  width: 100%;
  font-size: 14px;
  border: none;
  border-bottom: 2px solid #ccc;
  margin-bottom: 10px;
  padding: 5px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
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