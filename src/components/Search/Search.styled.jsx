import styled from '@emotion/styled';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const Wrap = styled.div`
  display: inline-flex;
  margin-top: 24px;
  margin-left: 50%;
  transform: translateX(-50%);
  padding: 16px;

  gap: 16px;
  background-color: #f4a259;
  border-radius: 5px;
  overflow: hidden;
`;

export const Input = styled(TextField)`
  & label.Mui-focused {
    color: #363030;
  }
  & .MuiInput-underline:after {
    border-bottom-color: #363030;
  }
  & .MuiOutlinedInput-root {
    & fieldset,
    &:hover fieldset,
    &.Mui-focused fieldset {
      border-color: #363030;
    }
  }
`;

export const Submit = styled(Button)`
  color: #fff;
  background-color: #363030;
  :hover {
    background-color: #534646;
  }
`;
