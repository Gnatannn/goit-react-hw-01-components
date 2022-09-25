import styled from 'styled-components';

export const ProfileContainer = styled.div`
  padding: 15px;
  text-align: center;
  background-color: darkgrey;
`;

export const Description = styled.div`
  margin-left: auto;
  margin-right: auto;
  outline: 1px solid black;
  width: 300px;
  background-color: white;
  padding-bottom: 15px;
`;

export const Image = styled.img`
  padding: 15px;
  width: 150px;
  border-radius: 50%;
`;

export const DescriptionText = styled.p`
  margin-bottom: 5px;
  :last-child {
    margin-bottom: 0;
  }
`;

export const List = styled.ul`
  width: 300px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: calc(700px / 4);
  height: 60px;
  outline: 1px solid black;
  background-color: lightgray;
  /* border-radius: 5px; */
`;

export const ListItemLabel = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #808080;
`;

export const ListItemNumber = styled.span`
  font-weight: 700;
  font-size: 18px;
`;
