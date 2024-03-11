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
      <CenterColumn>
        <p>
          Якщо у вас є побажання стосовно додавання додаткових дорків, посилань чи іншого пишіть нам:{' '}
          <a href="mailto:vakummail@gmail.com">vakummail@gmail.com</a>
        </p>
      </CenterColumn>
      <RightColumn></RightColumn>
    </MainDiv>
  );
};
export default HomePage;
