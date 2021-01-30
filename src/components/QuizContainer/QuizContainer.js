import styled from 'styled-components';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 450px;
  max-height: 600px;
  padding-top: 0;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default QuizContainer;
