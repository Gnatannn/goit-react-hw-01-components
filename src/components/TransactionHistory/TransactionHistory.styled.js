import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  padding: 15px;
  text-align: center;
  background-color: darkgrey;
`;

export const TableHead = styled.thead`
  height: 40px;
  background-color: turquoise;
`;

export const TableLineHead = styled.tr``;

export const TableHeadText = styled.th`
  text-transform: uppercase;
  color: white;
`;

export const TableBody = styled.tbody`
  display: flex-column;
`;

export const TableLineBody = styled.tr`
  text-transform: capitalize;
  height: 40px;
  background-color: white;
  :nth-child(even) {
    background-color: #ddd;
  }
  :hover {
    outline: 3px solid green;
  }
`;

export const TableLineText = styled.td`
  color: darkgray;
  font-weight: 700;
  /* font-size: 18px; */
`;
