import React from 'react';
import searchIcon from './search.svg';
import { FormSearch, SearchBar, SearchIcon } from './StyledSearchForm';

import { observer } from 'mobx-react';
import store from '../../store';

const SearchForm: React.FC = () => {
  return (
    <>
      <FormSearch>
        <SearchBar
          type="text"
          placeholder="Поиск по имени"
          value={store.input}
          onChange={(e) => store.setInput(e.target.value)}
        />
        <SearchIcon src={searchIcon} />
      </FormSearch>
    </>
  );
};

export default observer(SearchForm);
