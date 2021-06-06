import React from 'react';
import styled from 'styled-components';
import searchIcon from '../assets/search.svg';

import { observer } from 'mobx-react';
import store from '../store';

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

const FormSearch = styled.form`
  position: relative;
  width: 980px;
  height: 48px;
  margin-right: 20px;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  @media ${(props) => props.theme.media.phone} {
    width: 266px;
  }
`;
const SearchBar = styled.input`
  width: 100%;
  height: 45px;
  padding-left: 55px;
  border: 1px solid transparent;
  opacity: 0.3;
  :focus {
    border: 1px solid ${(props) => props.theme.colors.primary};
    outline: none;
  }
`;
const SearchIcon = styled.img`
  position: absolute;
  width: 18.52px;
  top: 31.25%;
  left: 20px;
`;

export default observer(SearchForm);
