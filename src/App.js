import React, {Component} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {getTutorialPath, getTutorialsPath, getTutorialsRoute} from './routes';
import NavBar from './components/NavBar';
import TutorialsIndexScreen from './tutorials/IndexScreen';
import Tutorial from './components/Tutorial';
import styled from '@emotion/styled/macro';

const AppRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  .content-container {
    background-color: hsl(0, 0%, 70%);
    flex: 1;
    overflow: auto;
  }
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppRoot>
          <NavBar />
          <div className="content-container">
            <Switch>
              <Route
                component={TutorialsIndexScreen}
                exact
                path={getTutorialsPath()}
              />
              <Route
                component={Tutorial}
                // component={() => <TutorialIndexScreen/>}
                exact
                path={getTutorialPath()}
              />
              <Redirect to={getTutorialsRoute()} />
            </Switch>
          </div>
        </AppRoot>
      </BrowserRouter>
    );
  }
}

export default App;
