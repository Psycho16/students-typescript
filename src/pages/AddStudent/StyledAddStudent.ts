import styled from 'styled-components';

export const MainContent = styled.div`
  padding: 0 130px;
  height: 100vh;
  width: 1440px;
  margin: 0 auto;
  margin-top: 23px;
  @media ${(props) => props.theme.media.medium} {
    width: 1000px;
    padding: 0px 54px;
  }
  @media ${(props) => props.theme.media.small} {
    width: 600px;
    padding: 0px 28px;
  }
  @media ${(props) => props.theme.media.phone} {
    padding: 0 30px;
  }
`;
export const PageTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  text-align: start;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  margin-bottom: 30px;
  @media ${(props) => props.theme.media.medium} {
    font-size: 35px;
    margin-bottom: 30px;
  }
  @media ${(props) => props.theme.media.small} {
    font-size: 30px;
    margin-bottom: 30px;
  }
  @media ${(props) => props.theme.media.phone} {
    font-weight: bold;
    font-size: 30px;
    line-height: 38px;
    margin-bottom: 22px;
  }
`;
export const BackToPage = styled.div`
  width: 315px;
  height: 20px;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
  display: flex;
  align-items: center;
  padding-left: 35px;
  text-transform: uppercase;
  background-image: url(./arrow-left.svg);
  background-repeat: no-repeat;
  background-position: 0 center;
  background-size: 15px;
  margin-bottom: 30px;
  :hover {
    text-decoration-skip-ink: none;
    text-decoration: underline;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 486px;
  @media ${(props) => props.theme.media.phone} {
    height: auto;
    flex-wrap: nowrap;
  }
`;
export const AddImageButton = styled.div`
  margin-bottom: 30px;
  max-width: 228px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const AddImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-image: url('./initials.png');
  background-position: center center;
  background-repeat: no-repeat;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
`;
export const AddImageText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddImageTitle = styled.h2`
  font-size: 16px;
  line-height: 20px;
  text-decoration-line: underline;
  // чтобы русские буквы например "Д",
  //подчеркивались, а не проходили сквозь подчеркивание
  text-decoration-skip-ink: none;
  margin-bottom: 8px;
`;
export const AddImageSubtitle = styled.h3`
  font-size: 12px;
  line-height: 15px;
`;

export const CreateButton = styled.button`
  content: 'Создать';
  min-width: 380px;
  height: 50px;
  text-align: center;
  border: none;
  outline: none;
  width: fit-content;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  background: #49c2e8;
  border-radius: 10px;
  cursor: pointer;
  transition: 300ms;
  :hover {
    background: #65accc;
  }
`;
