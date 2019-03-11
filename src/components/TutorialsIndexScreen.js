import React from 'react';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled/macro';

import {getTutorialRoute} from '../routes';
import {colors} from '../constants';
import {nodeSetupTitle} from '../tutorials/node-setup';
import {reactRouterTitle} from '../tutorials/react-router';
import {vsCodeTitle} from '../tutorials/vs-code';
import {classResourcesTitle} from '../tutorials/class-resources';

const TutorialsRoot = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 20px;

  .coming-soon-container {
    margin-top: 24px;
    font-size: 1.2rem;
  }

  .coming-soon-tutorial {
    color: #6b6b6b;
    font-size: 1.1rem;
    margin: 12px 34px;
  }

  .link-container {
    padding: 18px 0px;

    &:hover .tutorial-link {
      color: black;
      padding-left: 4px;
      transition: padding 0.2s;
    }
  }

  .tutorial-link {
    color: ${colors.primaryColor};
    font-family: 'PT Serif', serif;
    font-size: 1.5rem;
    font-weight: bold;
    transition: padding 0.2s;
  }
`;

const completedTutorials = [
  {id: 1, title: nodeSetupTitle},
  {id: 2, title: reactRouterTitle},
  {id: 3, title: classResourcesTitle},
  {id: 4, title: vsCodeTitle},
];

const comingSoonTutorials = [
  {id: 5, title: 'Effectively Managing Source Code with Git'},
  {id: 6, title: 'Using Emotion and Styled Components with React'},
  {id: 7, title: 'Paving a Path to World Domination With The Bones Of Your Enemies'},
];

class TutorialsIndexScreen extends React.Component {
  render() {
    return (
      <TutorialsRoot>
        {completedTutorials.length &&
          completedTutorials.map(x => (
            <div key={x.id} className="link-container">
              <Link className="tutorial-link" to={getTutorialRoute(x.id)}>
                {x.title}
              </Link>
            </div>
          ))}

        {comingSoonTutorials.length && (
          <div className="coming-soon-container">
            Coming "Soon":
            {comingSoonTutorials.map(x => (
              <div key={x.id} className="coming-soon-tutorial">
                {x.title}
              </div>
            ))}
          </div>
        )}
      </TutorialsRoot>
    );
  }
}

export default TutorialsIndexScreen;
