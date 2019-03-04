import React from 'react';
import Section from '../components/Section';


export default function Blackjack(props) {
  console.log(props)
  return (
    <Section
      path='/'
      color='#4286f4'
      heading='Blackjack'
      content='This is my Blackjack game.'
    />
  );
}
