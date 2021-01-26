import styled from "styled-components";

import HeadTag from '../src/components/HeadTag/HeadTag';

import db from '../db.json';

import Widget  from '../src/components/Widgets/Widget';
import Footer from '../src/components/Footer/Footer';
import GitHubCorner from '../src/components/GithubCorner/GithubCorner';
import QuizBackground from '../src/components/QuizBackground/QuizBackground';


const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <>
    <HeadTag />
    <QuizBackground backgroundImage={db.bg} >
      <QuizContainer>
        <Widget>
            <Widget.Header>
              <h1>Supernatural Quiz</h1>
            </Widget.Header>
          <Widget.Content>
              <p>Are you really a hunter?</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
              <h2>Put your quiz here</h2>
              <p>Lorem ipsum dolor sit</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Pedro-Murilo" />
    </QuizBackground>
    </>
  );
}
