export const reactRouterTitle = 'Getting Started with React Router';

const markdown = `
# ${reactRouterTitle}

## Introduction
Routing plays a major role in web applications. The window that the browser is loading your application on has a location object that keeps track of when your URL changes, and loads the correct file that matches the url (read [this](https://developer.mozilla.org/en-US/docs/Web/API/Window/location) for more details). 

When the location would change the application would refresh. SPAs(Single Page Applications) change the view without refreshing the page, creating a nicer experience that is easier(usually) to manage from a coding perspective. 

You can manage routing and changes to the location object yourself, but it is more convenient, and usually more reliable, to depend on a library to manage rendering the correct page/view for you.

One of the most popular options to handle routing with React is React Router. Traditionally, possible routes are defined before the application is built, and set in stone(aka static routing). React Router deviates from this with version 4.0, and steps into the mystical world of "Dynamic Routing".

## Setting Up
**Note**: Is it not necessary to start a new application for this post. It will simply give you a sandbox to try out some of the examples.
If you have not setup up your machine to create React applications, please refer to [this tutorial](http://localhost:3000/tutorials/1). Don't worry, I'll wait.

* To get started, create a new React application by entering \`create-react-app your_project_name\` in a terminal. You can name the app whatever you fancy, ie: \`create-react-app fish-pants\` 🤷‍

* Once you have create the app, \`cd\` into your new folder and add React Router with \`npm install --save react-router-dom\` or \`yarn add react-router-dom\`

**Note** If you are making a React-Native app, install \`react-router-native\` instead. It is a slightly different than the browser's implementation, however, so check out more [here](https://reacttraining.com/react-router/native/guides/quick-start).

Once everything is installed, you can begin trying out the different React Router components. There are about six items from React Router that you should know about: \`BrowserRouter, Route, Switch, Link(or NavLink), Redirect, and withRouter\`

## BrowserRouter
\`BrowserRouter\` ([here](https://reacttraining.com/react-router/web/api/BrowserRouter)) is responsible for keeping track of changes to your location, via links, manual changes from the code, etc. Traditionally, your \`App\` component will be wrapped with the \`BrowserRouter\` component.

\`\`\`js
import { BrowserRouter } from 'react-router-dom'
...
<BrowserRouter>
  <App/>
</BrowserRouter>
\`\`\`

## Route
\`Route\` ([here](https://reacttraining.com/react-router/web/api/Route)) is used to tell the BrowserRouter which component(s) to render with the URL matches a defined path. You can set parameters, and even make them optional.

\`\`\`js
import { Route } from 'react-router-dom'
...
<Route path="/users" component={UsersIndexScreen}/>
\`\`\`

## Link
A \`Link\` ([here](https://reacttraining.com/react-router/web/api/Link)) is used in your components to modify your location. A \`Link\` creates an anchor element when it is rendered as HTML. You can also use the \`NavLink\` ([here](https://reacttraining.com/react-router/web/api/NavLink)) component to style your \`Link\` when it is the active path.

\`\`\`js
import { Link, NavLink } from 'react-router-dom'
...
<Link to="/about">About</Link>
// or
<NavLink to="/about" activeClassName="selected">About</NavLink>
\`\`\`


## Switch
A \`Switch\` ([here](https://reacttraining.com/react-router/web/api/Switch)) is a useful component used to bundle up \`Route\` components. React Router will iterate over the Routes and render the first one with a matching path. This is useful for nested routes, for providing a "404 Not Found" screen, etc.

\`\`\`js
import { Switch, Route } from 'react-router-dom';
...
<Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/about" component={() => <div>About</div>)}/> // You can stub out your components if you want
  <Route path="/:user" component={User}/>
  <Route component={NoMatch}/>
</Switch>
\`\`\`


## Redirect
\`Redirect\` ([here](https://reacttraining.com/react-router/web/api/Redirect)) is good to conditionally render, ie: if a user is not logged in, redirect them to the log in page.

\`\`\`js
import {Redirect} from 'react-router-dom';

const MyComponent = ({user}) => (
    user.isLoggedIn 
        ? <div>My password is password</div> 
        : <Redirect to="/login" />
    );
\`\`\`

## withRouter
\`withRouter\` ([here](https://reacttraining.com/react-router/web/api/withRouter)) is a bit different in its implementation, but you might end up using it if you want to access or modify URL parts from your JavaScript. It is a higher order component(read more [here](https://reactjs.org/docs/higher-order-components.html)) that allows you to access React Router-supplied props from within one of your components.

\`\`\`js
import { withRouter } from 'react-router'

class MyComponent extends React.Component {
  render() {
    return (
      <div>You are now at {this.props.location.pathname}</div>
    )
  }
}

const MyComponentWithRouter =  withRouter(MyComponent); // This will add items to MyComponent's props when it renders, such as location. There are very useful ones, like match, so be sure to check them out!

export default MyComponentWithRouter;
\`\`\`

## Resources
I hope you have gained some insights on getting started with React Router, feel free to post up questions on the Discord chat! Here are some great resources:

* https://reacttraining.com/react-router/web/guides/philosophy

* https://tylermcginnis.com/react-router-philosophy-introduction/
`;

export default markdown;
