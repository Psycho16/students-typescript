import styled from 'styled-components';
export const AppTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  text-align: start;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  /* margin-bottom: 47px; */
  @media ${(props) => props.theme.media.medium} {
    font-size: 35px;
  }
  @media ${(props) => props.theme.media.small} {
    font-size: 30px;
  }
  @media ${(props) => props.theme.media.phone} {
    font-weight: bold;
    font-size: 30px;
    line-height: 38px;
    margin-bottom: 22px;
  }
`;
export const TitleContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 47px;
  @media ${(props) => props.theme.media.phone} {
    flex-direction: column;
  }
`;
export const MainContent = styled.div`
  padding: 0 130px;
  width: 1440px;
  margin: 0 auto;
  margin-top: 75px;
  @media ${(props) => props.theme.media.medium} {
    width: 1000px;
    padding: 0px 54px;
    margin-top: 62px;
  }
  @media ${(props) => props.theme.media.small} {
    width: 600px;
    padding: 0px 28px;
    margin-top: 52px;
  }
  @media ${(props) => props.theme.media.phone} {
    width: auto;
    padding: 0 20px;
    margin-top: 39px;
  }
`;
export const MainStudentsWrapper = styled.div`
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  padding: 26px 20px;
`;

// для таблицы студентов
export const StudentWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: start;
  padding-right: 17px;
  margin-bottom: 12px;
  @media ${(props) => props.theme.media.medium} {
    height: 30px;
  }
  @media ${(props) => props.theme.media.small} {
    height: 25px;
  }
  @media ${(props) => props.theme.media.phone} {
    display: none;
  }
`;
export const StudentName = styled.h1`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  width: 100px;
  margin-left: 80px;
  margin-right: 220px;
  @media ${(props) => props.theme.media.medium} {
    margin-right: 90px;
    font-size: 14px;
  }
  @media ${(props) => props.theme.media.small} {
    margin-left: 70px;
    margin-right: 27px;
    font-size: 12px;
    width: 38px;
  }
`;
export const StudentSpecialty = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  width: 132px;
  margin-right: 165px;
  @media ${(props) => props.theme.media.medium} {
    margin-right: 85px;
    font-size: 14px;
  }
  @media ${(props) => props.theme.media.small} {
    font-size: 12px;
    width: 97px;
    min-width: 97px;
    margin-right: 29px;
  }
`;
export const StudentGroup = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  width: 100px;
  margin-right: 43px;
  @media ${(props) => props.theme.media.medium} {
    margin-right: 15px;
    font-size: 14px;
  }
  @media ${(props) => props.theme.media.small} {
    font-size: 12px;
    width: 64px;
  }
`;
export const StudentAge = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  width: 100px;
  margin-right: 40px;
  @media ${(props) => props.theme.media.medium} {
    font-size: 14px;
    width: 80px;
    margin-right: 25px;
  }
  @media ${(props) => props.theme.media.small} {
    font-size: 12px;
    width: 52px;
  }
`;
export const StudentRating = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  width: 6.8%;
  /* margin-right: 3.4%; */
  @media ${(props) => props.theme.media.medium} {
    font-size: 14px;
  }
  @media ${(props) => props.theme.media.small} {
    font-size: 12px;
  }
`;
