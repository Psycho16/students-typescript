import styled from 'styled-components';
export const InputPopupWrapper = styled.div`
  min-width: 380px;
  width: 380px;
  height: 76px;
`;

export const InputTitle = styled.h2`
  font-size: 15px;
  line-height: 20px;
  margin-bottom: 8px;
`;

export const PopupWrapper = styled.div`
  position: relative;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  width: 100%;
`;

export const PopupLabel = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 19px 12px 20px;
  border-radius: 6px;
`;

export const PopupSpan = styled.span`
  color: #000000;
  font-size: 16px;
  line-height: 20px;
  opacity: 0.3;
  width: 317px;
`;

export const PopupLogo = styled.img`
  width: 15px;
  height: 15px;
`;

export const Popup = styled.div`
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgb(0 0 0 / 9%);
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  text-align: start;
  padding-top: 5px;
  margin-top: 6px;
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
export const PopupUl = styled.ul`
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
export const PopupLi = styled.li`
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
