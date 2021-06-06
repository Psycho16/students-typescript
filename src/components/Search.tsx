import React from 'react';
import { SearchForm, SortPopup } from './index';
import styled from 'styled-components';

const Search: React.FC = () => {
  return (
    <SearchWrapper>
      <SearchForm />
      <SortPopup
        items={[
          'Имя А-Я',
          'Имя Я-А',
          'Сначала моложе',
          'Сначала старше',
          'Высокий рейтинг',
          'Низкий рейтинг',
        ]}
      />
    </SearchWrapper>
  );
};
const SearchWrapper = styled.div`
  display: flex;
  margin-bottom: 36px;
`;

export default Search;
