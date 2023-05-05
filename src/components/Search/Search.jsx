import { useState } from 'react';
import { Wrap, Input, Submit } from './Search.styled';
import { toast } from 'react-toastify';
export const Search = ({ handleSubmit }) => {
  const [query, setQuery] = useState('');

  const onSubmit = () => {
    if (query !== '') {
      handleSubmit(query);
      setQuery('');
      return;
    }
    toast.error('Fill in the fields!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };
  return (
    <Wrap>
      <Input
        id="outlined-basic"
        label="Search"
        variant="outlined"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <Submit variant="contained" onClick={onSubmit}>
        Submit
      </Submit>
    </Wrap>
  );
};
