import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrap = styled.div`
  margin-top: 24px;
  padding: 16px;
  display: flex;
  gap: 16px;
  background-color: #f4a259;
  border-radius: 5px;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  max-width: 300px;
  height: 100%;
  object-fit: contain;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  justify-content: flex-start;
  gap: 24px;
`;

export const Item = styled.li`
  border: 2px #363030 solid;
  border-radius: 5px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4a259;
  transition: background-color linear 250ms;
  :hover {
    background-color: #e4b48b;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #363030;
  font-size: 24px;
  padding: 12px;
  &.active {
    color: #e6e6e6;
  }
`;
