import styled from 'styled-components';

export const FormSearch = styled.form`
  position: relative;
  width: calc(100% - 200px);
  height: 48px;
  margin-right: 20px;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  @media ${(props) => props.theme.media.phone} {
    width: 78%;
  }
`;
export const SearchBar = styled.input`
  width: 100%;
  height: 48px;
  padding-left: 55px;
  border: 1px solid transparent;
  opacity: 0.5;
  font-size: 16px;
  line-height: 20px;
  :focus {
    outline: none;
    font-size: 17px;
    opacity: 1;
  }
  :focus::-webkit-input-placeholder {
    color: transparent;
  }
  /* Firefox < 19 */
  :focus::-moz-placeholder {
    color: transparent;
  }
  /* Firefox > 19 */
  :focus::-moz-placeholder {
    color: transparent;
  }
`;
export const SearchIcon = styled.img`
  position: absolute;
  width: 18.52px;
  top: 31.25%;
  left: 20px;
`;
