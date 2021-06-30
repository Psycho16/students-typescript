import React from 'react';
import sort from './sort.svg';
import {
  Sort,
  SortLabel,
  SortSpan,
  SortLogo,
  SortPop,
  SortUl,
  SortLi,
  SortLi1,
} from './StyledSortPopup';
import { observer } from 'mobx-react';
import store from '../../store';

interface sortPopup {
  items: string[];
}

const SortPopup: React.FC<sortPopup> = ({ items }) => {
  const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false);
  const [activeItem, setActiveItem] = React.useState<number>(0);
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
              ? items.map((name: string, index: number) =>
                  index === activeItem ? (
                    <SortLi1
                      key={name}
                      onClick={() => {
                        setActiveItem(index);
                        store.setSortType(items[index]);
                      }}
                    >
                      {name}
                    </SortLi1>
                  ) : (
                    <SortLi
                      key={name}
                      onClick={() => {
                        setActiveItem(index);
                        store.setSortType(items[index]);
                      }}
                    >
                      {name}
                    </SortLi>
                  ),
                )
              : ''}
          </SortUl>
        </SortPop>
      ) : (
        ''
      )}
    </Sort>
  );
};

export default observer(SortPopup);
