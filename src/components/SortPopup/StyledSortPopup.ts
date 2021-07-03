import styled from 'styled-components';
export const Sort = styled.div`
  position: relative;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  width: 15%;
  @media ${(props) => props.theme.media.medium} {
    width: 20%;
  }
  @media ${(props) => props.theme.media.small} {
    width: 25%;
  }
  @media ${(props) => props.theme.media.phone} {
    position: static;
  }
`;
export const SortLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-right: 17px;
  padding-left: 20px;
  width: 180px;
  height: 48px;
  @media ${(props) => props.theme.media.small} {
    height: 32px;
    width: 152px;
    padding-right: 20px;
    padding-left: 16px;
  }
  @media ${(props) => props.theme.media.phone} {
    width: 100%;
    padding: 0;
  }
`;
export const SortSpan = styled.span`
  margin-right: 71px;
  font-size: 12px;
  line-height: 15px;
  width: 105px;
  cursor: pointer;
  @media ${(props) => props.theme.media.small} {
    text-align: start;
    font-size: 11px;
    margin-right: 12px;
  }
  @media ${(props) => props.theme.media.phone} {
    display: none;
  }
`;
export const SortLogo = styled.img`
  width: 20px;
  height: 18px;
  @media ${(props) => props.theme.media.phone} {
    width: 100%;
  }
`;
export const SortPop = styled.div`
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgb(0 0 0 / 9%);
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  height: 246px;
  text-align: start;
  padding-top: 8px;
  @media ${(props) => props.theme.media.phone} {
    top: 36%;
    left: 10%;
    width: 80%;
    height: 450px;
    display: flex;
    align-items: center;
    z-index: 1;
  }
`;
export const SortUl = styled.ul`
  overflow: hidden;
  font-size: 12px;
  line-height: 15px;
  @media ${(props) => props.theme.media.phone} {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 450px;
  }
`;
export const SortLi = styled.li`
  width: 169px;
  height: 35px;
  margin: 0 auto;
  margin-bottom: 4px;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 12px;
  line-height: 15px;
  list-style-type: none;
  :active,
  :hover {
    background: rgba(73, 194, 232, 0.5);
    border-radius: 5px;
  }
  @media ${(props) => props.theme.media.small} {
    font-size: 10px;
    width: 94%;
    padding: 12px 11px;
  }
  @media ${(props) => props.theme.media.phone} {
    padding: 20px 11px;
    margin-bottom: 0;
    height: 55px;
    font-size: 18px;
    width: 88%;
  }
`;

export const SortLi1 = styled.li`
  width: 169px;
  height: 35px;
  margin: 0 auto;
  margin-bottom: 4px;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 12px;
  line-height: 15px;
  list-style-type: none;
  background: rgba(73, 194, 232, 0.11);
  border-radius: 5px;
  background-image: url('./path.png');
  background-repeat: no-repeat;
  background-position: 87% center;
  background-size: 10px;
  :active,
  :hover {
    background: rgba(73, 194, 232, 0.5);
    border-radius: 5px;
  }
  @media ${(props) => props.theme.media.small} {
    font-size: 10px;
    width: 94%;
    padding: 12px 11px;
  }
  @media ${(props) => props.theme.media.phone} {
    padding: 20px 11px;
    margin-bottom: 0;
    height: 55px;
    font-size: 18px;
    width: 88%;
    background-size: 15px;
  }
`;
