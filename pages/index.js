import React from 'react';

import { useRouter } from 'next/router';

import db from '../db.json';

import Widget from '../src/components/Widgets/Widget';
import Footer from '../src/components/Footer/Footer';
import GitHubCorner from '../src/components/GithubCorner/GithubCorner';
import QuizBackground from '../src/components/QuizBackground/QuizBackground';
import QuizLogo from '../src/components/QuizLogo/QuizLogo';
import QuizContainer from '../src/components/QuizContainer/QuizContainer';
import Input from '../src/components/Input/Input';
import Button from '../src/components/Button/Button';
import Link from '../src/components/Link/Link';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Supernatural Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(infosDoEvento) => {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name="username"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Nickname"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Play ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h2>Other People Quizzes</h2>

            <ul>
              {db.external.map((linkExternal) => {
                const [projectName, githubUser] = linkExternal
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');

                return (
                  <li key={linkExternal}>
                    <Widget.Topic
                      as={Link}
                      href={`/quiz/${projectName}___${githubUser}`}
                    >
                      {`${githubUser}/${projectName}`}
                    </Widget.Topic>
                  </li>
                );
              })}

            </ul>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Pedro-Murilo" />
    </QuizBackground>
  );
}
