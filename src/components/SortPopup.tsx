import React from 'react';
import sort from '../assets/sort.svg';
import styled from 'styled-components';

interface sortPopup {
  items: string[];
}

const SortPopup: React.FC<sortPopup> = ({ items }) => {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(0);
  function toggleVisiblePopup() {
    setVisiblePopup(!visiblePopup);
  }
  const activeLabel = items[activeItem];

  return (
    <Sort onClick={toggleVisiblePopup}>
      <SortLabel>
        <SortSpan>{activeLabel}</SortSpan>
        <SortLogo src={sort} alt="sort-icon"></SortLogo>
      </SortLabel>
      {visiblePopup ? (
        <SortPop>
          <SortUl>
            {items
              ? items.map((name, index) => (
                  <SortLi
                    key={name}
                    onClick={() => {
                      setActiveItem(index);
                    }}
                  >
                    {name}
                  </SortLi>
                ))
              : ''}
          </SortUl>
        </SortPop>
      ) : (
        ''
      )}
    </Sort>
  );
};
const Sort = styled.div`
  position: relative;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  width: 15%;
`;
const SortLabel = styled.div`
  display: flex;
  align-items: center;
  padding-right: 17px;
  padding-left: 20px;
  height: 48px;
  @media ${(props) => props.theme.media.phone} {
    width: 100%;
    padding-right: 0;
  }
`;
const SortSpan = styled.span`
  margin-right: 71px;
  font-size: 12px;
  line-height: 15px;
  width: 105px;
  cursor: pointer;
  @media ${(props) => props.theme.media.phone} {
    display: none;
  }
`;
const SortLogo = styled.img`
  width: 20px;
  height: 18px;
  @media ${(props) => props.theme.media.phone} {
    width: 100%;
  }
`;
const SortPop = styled.div`
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgb(0 0 0 / 9%);
  border-radius: 10px;
  overflow: hidden;
  width: 160px;
`;
const SortUl = styled.ul`
  overflow: hidden;
  font-size: 12px;
  line-height: 15px;
`;
const SortLi = styled.li`
  width: 100%;
  padding: 12px 20px;
  cursor: pointer;
  font-size: 12px;
  line-height: 15px;
  list-style-type: none;
  :active,
  :hover {
    background: rgba(73, 194, 232, 0.11);
    border-radius: 5px;
  }
`;

export default SortPopup;
