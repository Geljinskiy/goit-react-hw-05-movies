import { useState } from 'react';
import { Input, Button, Label } from './MovieSearch.styled';

const MovieSearch = ({ onSubmit, prevQuery }) => {
  const [interimQuery, setInterimQuery] = useState(prevQuery);

  const onFormSubmit = ev => {
    ev.preventDefault();
    const query = ev.target.elements.query.value;
    onSubmit(query);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Label>
        <Input
          onChange={ev => setInterimQuery(ev.target.value)}
          autoFocus
          name="query"
          type="text"
          value={interimQuery}
        />
        <Button
          disabled={!interimQuery || prevQuery === interimQuery}
          type="submit"
        >
          Search
        </Button>
      </Label>
    </form>
  );
};

export default MovieSearch;
