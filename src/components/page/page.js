import React from 'react';
import PropTypes from 'prop-types';

import Deck from './deck/deck.jsx';

const Page = (props) => {
  const content = props.content || [];

  return (
    <React.Fragment>

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
