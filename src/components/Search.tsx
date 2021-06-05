import React from 'react';
import { SearchForm } from './index';
import styled from 'styled-components';

const Search: React.FC = () => {
  return (
    <SearchWrapper>
      <SearchForm />
    </SearchWrapper>
  );
};
const SearchWrapper = styled.div`
  display: flex;
  margin-bottom: 36px;
`;

export default Search;
