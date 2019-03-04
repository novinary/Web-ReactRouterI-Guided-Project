import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Blackjack from '../screens/Blackjack';
import RockPaperScissors from '../screens/RockPaperScissors';
import TicTacToe from '../screens/TicTacToe';
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

class Link extends React.Component {
  navigateTo = () => {
    history.pushState(null, null, this.props.to);
  }
  render() {
    return (
      <a onClick={this.navigateTo} href="#">{this.props.children}</a>
    )
  }
}