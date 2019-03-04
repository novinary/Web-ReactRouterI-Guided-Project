import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Blackjack from '../screens/Blackjack';
import RockPaperScissors from '../screens/RockPaperScissors';
import TicTacToe from '../screens/TicTacToe';
import Section from './Section';

// list of apps
// now we have association between components and id
const apps = [
  { id: '1', Component: Blackjack },
  { id: '2', Component: RockPaperScissors },
  { id: '3', Component: TicTacToe },
];

function App(props) {
  const { Component } = apps.find(
    app => app.id === props.match.params.id,   // get id from object called params
  );

  return <Component {...props} />;
}


const StyledContainer = styled.div`
  padding: 20px;
  height: 100%;

  nav {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }
`;

// plugging in extra magic here with HOC
// const Blackjack = withRouteMatching(BlackjackPlain);
// const RockPaperScissors = withRouteMatching(RockPaperScissorsPlain);
// const TicTacToe = withRouteMatching(TicTacToePlain);

export default function Container() {
  return (
    <Router>
      <StyledContainer>
        <nav>
          <Link to='/apps/1'>Black</Link>
          <Link to='/apps/2'>Rock</Link>
          <Link to='/apps/3'>Tic</Link>
          <Link to='/contact'>Contact</Link>

        </nav>

        {  /* <Blackjack path='/' /> */}

        <Route path='/apps/:id' component={App} />

        <Section
          color='#d6247a'
          heading='Contact'
          content='Contact me always renders.'
        />
      </StyledContainer>
    </Router>
  );
}

// using HOC here
// takes a component
// function withRouteMatching(Component) {
//   return class WithRouteMatching extends React.Component {
//     // here we are tracking the segment of url
//     // so i'm initialising path to be the true location (location.pathname)
//     // saving the state
//     state = { path: location.pathname }

//     // here i'm writing a method to update with current path
//     setPath = () => {
//       this.setState({ path: location.pathname });
//     }

//     //event listener to listen for pop state and run setPath
//     //popstate happens on window object
//     componentDidMount() {
//       this.setPath();
//       addEventListener('popstate', this.setPath);
//     }

//     render() {
//       // here i'm comparing actual url in the browser against props.path
//       // path should match is the actual url matches with the prop path injected
//       const pathsMatch = location.pathname === this.props.path;
//       // if this.props.path is not there it should render  
//       const shouldAlwaysRender = !this.props.path;

//       // if pathsMatch or shouldAlwaysRender return component
//       if (pathsMatch || shouldAlwaysRender) {
//         // here i'm using spread operator to pass all prop along
//         return <Component {...this.props} />;
//       }
//       // otherwise return something renderabl to eliminate error
//       return null;
//     }
//   };
// }

// // link component
// class Link extends React.Component {
//   navigateTo = () => {
//     history.pushState(null, null, this.props.to);
//   }

//   render() {
//     return (
//       <a onClick={this.navigateTo} href="#">{this.props.children}</a>
//     );
//   }
// }
