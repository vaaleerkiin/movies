import styled from '@emotion/styled';

export const Wrap = styled.ul`
  margin-top: 24px;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  list-style: none;
  gap: 16px;
  background-color: #f4a259;
  border-radius: 5px;
  overflow: hidden;
`;

export const Item = styled.li`
  display: flex;
  gap: 16px;
  width: calc(50% - 32px);
  img {
    width: 100%;
    max-width: 120px;
    height: 100%;
    object-fit: contain;
  }
`;
