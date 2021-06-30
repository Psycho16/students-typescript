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
    position: relative;
    width: 100%;
    height: 170px;
    flex-wrap: wrap;
    margin-bottom: 10px;
    box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
    border-radius: 6px;
    padding: 0;
    align-content: flex-start;
  }
`;
export const StudentAvatar = styled.img`
  border: 2px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  border-radius: 300px;
  width: 40px;
  height: 40px;
  margin-right: 20px;
  @media ${(props) => props.theme.media.phone} {
    margin-right: 20px;
    align-self: flex-start;
    margin-top: 16px;
    margin-left: 16px;
  }
`;
export const StudentName = styled.h1`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  width: 300px;
  margin-right: 20px;
  @media ${(props) => props.theme.media.phone} {
    font-size: 15px;
    height: 20px;
    width: calc(86% - 70px);
    line-height: 20px;
    align-self: flex-start;
    margin-top: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
export const SeparatingLine = styled.span`
  display: none;
  @media ${(props) => props.theme.media.phone} {
    width: 100%;
    opacity: 0.05;
    margin-top: 14px;
    border: 1px solid #000000;
    display: inline-block;
    margin-bottom: 15px;
  }
`;
export const StudentSpecialty = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  width: 280px;
  margin-right: 20px;
  @media ${(props) => props.theme.media.phone} {
    display: flex;
    align-items: center;
    order: 4;
    margin-left: 77px;
    width: 100%;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 5px;
    height: 20px;
  }
`;
export const StudentGroup = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  width: 88px;
  margin-right: 53px;
  @media ${(props) => props.theme.media.phone} {
    display: flex;
    align-items: center;
    order: 4;
    margin-left: 77px;
    width: 100%;
    font-size: 12px;
    line-height: 15px;
    margin-bottom: 5px;
    height: 20px;
  }
`;
export const StudentAge = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  width: 80px;
  margin-right: 60px;
  @media ${(props) => props.theme.media.phone} {
    display: flex;
    align-items: center;
    order: 4;
    margin-left: 77px;
    width: 100%;
    font-size: 12px;
    line-height: 15px;
    height: 20px;
  }
`;
export const StudentRatingAndColor = styled.div`
  display: flex;
  margin-right: 20px;
  width: 132px;
  @media ${(props) => props.theme.media.phone} {
    align-items: center;
    position: absolute;
    top: 39px;
    left: 77px;
  }
`;
export const StudentRating = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  width: 80px;
  margin-right: 22px;
  @media ${(props) => props.theme.media.phone} {
    display: flex;
    order: 3;
    align-items: baseline;
    margin-top: 1px;
    font-size: 12px;
    line-height: 15px;
    height: 12px;
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
export const AgeWord = styled.span`
  display: none;
  @media ${(props) => props.theme.media.phone} {
    display: inline-block;
    font-size: 12px;
    line-height: 15px;
    margin-left: 5px;
  }
`;
export const StudentColor = styled.h1`
  box-sizing: border-box;
  border-radius: 300px;
  width: 30px;
  height: 30px;
  @media ${(props) => props.theme.media.phone} {
    order: 2;
    width: 12px;
    height: 12px;
    margin-right: 13px;
  }
`;
export const DeleteButton = styled.img`
  width: 14px;
  height: 14px;
  background: #ffffff;
  box-shadow: 0px 0px 16.3715px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  @media ${(props) => props.theme.media.phone} {
    order: 2;
    width: 15px;
    height: 15px;
    position: absolute;
    right: 26px;
    top: 24px;
  }
`;
