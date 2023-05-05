import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const Card = styled.li`
  background-color: #f4a259;
  border-radius: 5px;
  width: 300px;
  overflow: hidden;
`;

export const Title = styled.h2`
  text-align: center;
  color: #363030;
  height: 50px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  margin: 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Release = styled.span`
  color: #363030;
  text-decoration: none;
`;
