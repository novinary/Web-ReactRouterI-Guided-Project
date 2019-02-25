import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Blackjack from '../screens/Blackjack';
import RockPaperScissors from '../screens/RockPaperScissors';
import TicTacToe from '../screens/TicTacToe';
import Section from './Section';

const apps = [
  { id: '1', Component: Blackjack },
  { id: '2', Component: RockPaperScissors },
  { id: '3', Component: TicTacToe },
];

function App(props) {
  const { Component } = apps.find(
    app => app.id === props.match.params.meh,
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

        <Route path='/apps/:meh' component={App} />

        {/* <Blackjack path='/' /> */}
        {/* <Route exact path='/' component={Blackjack} /> */}

        {/* <RockPaperScissors path='/rock_paper_scissors' /> */}
        {/* <Route path='/rock_paper_scissors' component={RockPaperScissors} /> */}

        {/* <TicTacToe path='/tic_tac_toe' /> */}
        {/* <Route path='/tic_tac_toe' component={TicTacToe} /> */}

        <Section
          color='#d6247a'
          heading='Contact'
          content='Contact me always renders.'
        />
      </StyledContainer>
    </Router>
  );
}

// function withRouteMatching(Component) {
//   return class WithRouteMatching extends React.Component {
//     state = { path: location.pathname }

//     setPath = () => {
//       this.setState({ path: '' });
//     }

//     componentDidMount() {
//       this.setPath();
//       addEventListener('popstate', this.setPath);
//     }

//     render() {
//       const pathsMatch = location.pathname === this.props.path;
//       const shouldAlwaysRender = !this.props.path;

//       if (pathsMatch || shouldAlwaysRender) {
//         return <Component {...this.props} />;
//       }
//       return null;
//     }
//   };
// }

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
