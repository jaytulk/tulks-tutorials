import React from 'react';
import styled from '@emotion/styled/macro';
import {Icon} from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import {getTutorialsRoute} from '../routes';
import {colors} from '../constants';

const NavBarRoot = styled.div`
  align-items: stretch;
  background-color: ${colors.primaryBackgroundColor};
  border-bottom: 4px solid #333;
  display: flex;
  height: 50px;

  .link-container {
    align-items: center;
    background-color: ${colors.primaryBackgroundColor};
    border: none;
    color: ${colors.primaryColor};
    display: flex;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.4rem;
    padding-right: 12px;

    &:hover {
      color: black;
      cursor: pointer;
    }
    &:focus {
      background-color: ${colors.primaryFocusBackgroundColor};
    }
    &:active {
      background-color: ${colors.primaryActiveBackgroundColor};
    }

    .icon {
      margin-left: 12px;
      margin-right: 8px;
    }
  }
`;

class NavBar extends React.Component {
  navigateToTutorials = () => {
    this.props.history.push(getTutorialsRoute());
  };

  render() {
    return (
      <NavBarRoot>
        <button className="link-container" onClick={this.navigateToTutorials}>
          <Icon className="icon" name="graduation" />
          Tulk's Tutorials
        </button>
      </NavBarRoot>
    );
  }
}

export default withRouter(NavBar);
