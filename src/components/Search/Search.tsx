import React from 'react';
import { SearchForm, SortPopup } from '../index';
import { SearchWrapper } from './StyledSearch';

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

export default Search;
