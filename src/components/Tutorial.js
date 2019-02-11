import React from 'react';
import {Icon} from 'semantic-ui-react';
import styled from '@emotion/styled/macro';
import {Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import getMarkdown from '../helpers/markdown-resolver';
import {getTutorialsRoute} from '../routes';
import {colors} from '../constants';
import {darken, lighten} from 'polished';

const TutorialRoot = styled.div`
  background-color: white;
  border-radius: 6px;
  margin: 24px auto;
  padding: 32px;
  width: 964px;
  overflow-x: hidden;

  @media (max-width: 964px) {
    width: 100%;
  }

  img {
    max-width: 100%;
  }

  .link {
    color: ${colors.primaryColor};

    &:hover {
      color: ${lighten(0.3, colors.primaryColor)};
    }
    &:active {
      color: ${darken(0.1, colors.primaryColor)};
    }
  }
`;

class Tutorial extends React.Component {
  render() {
    const {match} = this.props;
    return (
      <TutorialRoot>
        <Link className="link" to={getTutorialsRoute()}>
          <Icon name="chevron left" />
          Back
        </Link>
        <ReactMarkdown source={getMarkdown(match.params.tutorialId)} />
      </TutorialRoot>
    );
  }
}

export default Tutorial;
