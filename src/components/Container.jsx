import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import BlackjackPlain from '../screens/Blackjack';
import RockPaperScissorsPlain from '../screens/RockPaperScissors';
import TicTacToePlain from '../screens/TicTacToe';
import Section from './Section';


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
const Blackjack = withRouteMatching(BlackjackPlain);
const RockPaperScissors = withRouteMatching(RockPaperScissorsPlain);
const TicTacToe = withRouteMatching(TicTacToePlain);

export default function Container() {
  return (
    <StyledContainer>
      <nav>
        <Link to='/'>Black</Link>
        <Link to='/rock_paper_scissors'>Rock</Link>
        <Link to='/tic_tac_toe'>Tic</Link>
        <Link to='/contact'>Contact</Link>
      </nav>

      <Blackjack path='/' />

      <RockPaperScissors path='/rock_paper_scissors' />

      <TicTacToe path='tic_tac_toe' />

      <Section
        color='#d6247a'
        heading='Contact'
        content='Contact me always renders.'
      />
    </StyledContainer>
  );
}

// using HOC here
// takes a component
function withRouteMatching(Component) {
  return class WithRouteMatching extends React.Component {
    render() {
      // here i'm comparing actual url in the browser against props.path
      // path should match is the actual url matches with the prop path injected
      const pathsMatch = location.pathname === this.props.path;
      // if this.props.path is not there it should render 
      const shouldAlwaysRender = !this.props.path;

      // if pathsMatch or shouldAlwaysRender return component
      if (pathsMatch || shouldAlwaysRender) {
        // here i'm using spread operator to pass all prop along
        return <Component {...this.props} />;
      }
      // otherwise return something renderabl to eliminate error
      return null;
    }
  };
}

// link component
class Link extends React.Component {
  navigateTo = () => {
    history.pushState(null, null, this.props.to);
  }

  render() {
    return (
      <a onClick={this.navigateTo} href="#">{this.props.children}</a>
    );
  }
}