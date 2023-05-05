import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Header = styled.header`
  background-color: #f4a259;
  height: 68px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 24px;
  height: 100%;
`;

export const StyledLink = styled(NavLink)`
  color: #363030;
  font-weight: 600;
  font-size: 24px;
  text-decoration: none;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.27);
  transition: all linear 100ms;
  :hover {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.336);
  }
  &.active {
    color: #e6e6e6;
  }
`;
