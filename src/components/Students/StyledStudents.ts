import styled from 'styled-components';
export const StudentWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: start;
  padding-right: 17px;
  margin-bottom: 25px;
  @media ${(props) => props.theme.media.phone} {
    display: grid;
    grid-template-areas:
      ' avatar name name del '
      ' avatar color rating . '
      ' . . . . '
      ' . years years years '
      ' . spec spec spec '
      ' . group group group'
      ' . . . . ';
    grid-template-columns: 67px 20px repeat(2, 123px);
    grid-template-rows: repeat(7, 20px);
    column-gap: 10px;
    row-gap: 5px;
    width: 100%;
    height: 170px;
    margin-bottom: 10px;
    box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
    border-radius: 6px;
    padding: 20px;
  }
`;
export const StudentAvatar = styled.img`
  border: 2px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  border-radius: 300px;
  width: 3.4%;
  height: 40px;
  margin-right: 3.4%;
  @media ${(props) => props.theme.media.phone} {
    grid-area: avatar;
    width: 40px;
  }
`;
export const StudentName = styled.h1`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  width: 24.5%;
  margin-right: 3.4%;
  @media ${(props) => props.theme.media.phone} {
    grid-area: name;
    font-size: 15px;
    width: 100%;
    line-height: 20px;
  }
`;
export const StudentSpecialty = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  width: 23.7%;
  margin-right: 3.4%;
  @media ${(props) => props.theme.media.phone} {
    grid-area: spec;
    width: 100%;
    font-size: 12px;
    line-height: 15px;
  }
`;
export const StudentGroup = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  width: 6.8%;
  margin-right: 5%;
  @media ${(props) => props.theme.media.phone} {
    grid-area: group;
    width: 100%;
    font-size: 12px;
    line-height: 15px;
  }
`;
export const StudentAge = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  width: 6.8%;
  margin-right: 5%;
  @media ${(props) => props.theme.media.phone} {
    grid-area: years;
    width: 100%;
    font-size: 12px;
    line-height: 15px;
  }
`;
export const StudentRating = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  width: 6.8%;
  margin-right: 3.4%;
  @media ${(props) => props.theme.media.phone} {
    grid-area: rating;
    width: 100%;
    font-size: 12px;
    line-height: 15px;
  }
`;
export const RatingStar = styled.img`
  display: none;
  width: 10px;
  height: 10px;
  @media ${(props) => props.theme.media.phone} {
    display: inline-block;
    margin-right: 10px;
  }
`;
export const ListPoint = styled.img`
  display: none;
  width: 5px;
  height: 5px;
  @media ${(props) => props.theme.media.phone} {
    display: inline-block;
    margin-right: 13px;
  }
`;
export const StudentColor = styled.h1`
  box-sizing: border-box;
  border-radius: 300px;
  width: 30px;
  height: 30px;
  margin-right: 30px;
  @media ${(props) => props.theme.media.phone} {
    grid-area: color;
    width: 15px;
    height: 15px;
  }
`;
export const DeleteButton = styled.img`
  width: 14px;
  height: 14px;
  background: #ffffff;
  box-shadow: 0px 0px 16.3715px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  @media ${(props) => props.theme.media.phone} {
    grid-area: del;
    width: 15px;
    height: 15px;
  }
`;
