import React from 'react';
import {
  InputPopupWrapper,
  InputTitle,
  PopupWrapper,
  PopupLabel,
  PopupSpan,
  PopupLogo,
  Popup,
  PopupUl,
  PopupLi,
} from './StyledCustomPopupInput';
import popupLogo from './PopupSvg.svg';
interface customPopupInput {
  property: string;
  placeholder: string;
  items: string[];
}

const CustomPopupInput: React.FC<customPopupInput> = ({ property, placeholder, items }) => {
  const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false);
  const [activeItem, setActiveItem] = React.useState<number>(0);
  function toggleVisiblePopup() {
    setVisiblePopup(!visiblePopup);
  }
  const activeLabel = items[activeItem];
  console.log(items);

  return (
    <InputPopupWrapper>
      <InputTitle>{property}</InputTitle>
      <PopupWrapper onClick={toggleVisiblePopup}>
        <PopupLabel>
          <PopupSpan>{placeholder}</PopupSpan>
          <PopupLogo src={popupLogo} alt="popup-icon"></PopupLogo>
        </PopupLabel>
        {visiblePopup ? (
          <Popup>
            <PopupUl>
              {items ? items.map((item: string) => <PopupLi key={item}>{item}</PopupLi>) : ''}
            </PopupUl>
          </Popup>
        ) : (
          ''
        )}
      </PopupWrapper>
    </InputPopupWrapper>
  );
};

export default CustomPopupInput;
