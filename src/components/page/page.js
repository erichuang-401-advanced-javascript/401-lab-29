import React from 'react';
import PropTypes from 'prop-types';

import Deck from './deck/deck';

const Page = (props) => {
  const content = props.content || [];

  return (
    <React.Fragment>
      <h1>Decks and Cards</h1>
      {content.map((deck, i) => (
        <Deck deck={deck} key={i}/>
      ))}
    </React.Fragment>
  );
};

Page.propTypes = {
  content: PropTypes.array,
};

export default Page;
