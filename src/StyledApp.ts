import styled from 'styled-components';
export const AppTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  text-align: start;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  margin-bottom: 47px;
  @media ${(props) => props.theme.media.phone} {
    font-weight: bold;
    font-size: 30px;
    line-height: 38px;
    margin-bottom: 22px;
  }
`;
export const MainContent = styled.div`
  padding: 0 130px;
  @media ${(props) => props.theme.media.phone} {
    padding: 0 20px;
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
  padding-left: 6.7%;
  margin-bottom: 12px;
  @media ${(props) => props.theme.media.phone} {
    display: none;
  }
`;
export const StudentName = styled.h1`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  width: 24.5%;
  margin-right: 4.8%;
  /* text-align: start; */
`;
export const StudentSpecialty = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  width: 23.7%;
  margin-right: 4.4%;
`;
export const StudentGroup = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  width: 6.8%;
  margin-right: 5.7%;
`;
export const StudentAge = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  width: 6.8%;
  margin-right: 5.7%;
`;
export const StudentRating = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  width: 6.8%;
  margin-right: 3.4%;
`;
