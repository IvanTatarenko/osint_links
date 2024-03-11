import styled from 'styled-components';

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CenterColumn = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const LeftColumn = styled.div`
  flex: 1;
`;
const RightColumn = styled.div`
  flex: 1;
`;

const HomePage = () => {
  return (
    <MainDiv>
      <LeftColumn></LeftColumn>
      <CenterColumn>Для всіх питань та пропозицій, будь ласка, звертайтеся на адресу: vakummail@gmail.com</CenterColumn>
      <RightColumn></RightColumn>
    </MainDiv>
  );
};
export default HomePage;
