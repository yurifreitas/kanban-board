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

export const BoardInnerContainer = styled.div`
overflow: auto;
  height: 100vh;
  background-color: white;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
`;

export const ListContainer = styled.div`
  overflow: auto;
  box-shadow: 0 1px 0 rgba(9, 30, 66, 0.25);
  width: 25%;
  height: 100vh;
  margin: 5px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ListTitle = styled.h3`
font-size: 24px;
font-weight: bold;
color: #172b4d;
margin: 0;
padding: 6px 8px;

display: inline-block;
width: 100%;
box-sizing: border-box;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;
export const FooterContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 10px;
  background-color: #f2f2f2;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const FooterButton = styled.button`
  border: none;
  background-color: #5aac44;
  color: #fff;
  display: block;
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