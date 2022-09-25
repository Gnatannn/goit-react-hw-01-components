import styled from 'styled-components';

export const Section = styled.section`
  padding: 15px;
  text-align: center;
  background-color: darkgrey;
`;

export const Title = styled.h2`
  padding: 10px 0 10px 0;
  background-color: #fff;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`;

export const Stats = styled.ul`
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
  /* outline: 1px solid black; */
  background-color: ${getRandomHexColor};
  /* border-radius: 5px; */
`;

export const ListItemLabel = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: white;
`;

export const ListItemNumber = styled.span`
  font-weight: 700;
  font-size: 18px;
  color: white;
`;

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
