import styled from 'styled-components';

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
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

const MainText = styled.p`
  margin: 20px;
`

const MailLink = styled.a`
  color: #fff;
`

const HomePage = () => {
  return (
    <MainDiv>
      <LeftColumn></LeftColumn>
      <CenterColumn>
        <MainText>
          Якщо у вас є побажання стосовно додавання додаткових дорків, посилань чи іншого пишіть нам:{' '}
          <MailLink href="mailto:vakummail@gmail.com">vakummail@gmail.com</MailLink>
        </MainText>
      </CenterColumn>
      <RightColumn></RightColumn>
    </MainDiv>
  );
};
export default HomePage;
