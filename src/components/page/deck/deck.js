import React from 'react';
import PropTypes from 'prop-types';
import Card from './card/card';

const Deck = (props) => {
  const { deck } = props;

  return (
    <React.Fragment>
      <section className="deck">
        <header><h2>{deck.title}</h2></header>
        {deck.records.map((card, idx) => (
            <Card key={idx} card={card}/>
        ))}
      </section>
    </React.Fragment>
  );
};

Deck.propTypes = {
  deck: PropTypes.array,
};

export default Deck;
