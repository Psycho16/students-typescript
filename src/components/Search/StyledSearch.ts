import styled from 'styled-components';
export const SearchWrapper = styled.div`
  display: flex;
  margin-bottom: 36px;
  @media ${(props) => props.theme.media.small} {
    margin-bottom: 18px;
  }
`;
