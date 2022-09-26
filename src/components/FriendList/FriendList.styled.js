import styled from 'styled-components';

export const Section = styled.section`
  padding: 15px;
  display: flex;
  background-color: darkgrey;
`;

export const List = styled.ul`
  /* width: 500px; */
  display: flex-column;
  margin-left: auto;
  margin-right: auto;
  gap: 20px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px 0px;
  border-radius: 5px;
  /* outline: 1px solid black; */
  padding: 10px;
  background-color: white;
  :hover {
    outline: 3px solid green;
  }
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  margin-right: 10px;
`;

export const Image = styled.img`
  margin-right: 10px;
`;

export const ListItemName = styled.p`
  font-weight: 700;
  font-size: 18px;
  color: black;
`;
