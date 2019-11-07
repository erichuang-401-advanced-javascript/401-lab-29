import React from 'react';
import PropTypes from 'prop-types';
import Links from './links/links';

const Card = (props) => {
  const { card } = props;

  return (
    <React.Fragment>
      <div className={'card'}>
        <header><h3>{card.title}</h3></header>
        <div className="content">{card.copy}</div>
        <figure>
          <img src={card.media.href} alt={card.media.alt}/>
          <figcaption>{card.media.title}</figcaption>
        </figure>
        <nav className="links">
          <ul>
            {card.links.map((link, idx) => (
              <Links key={idx} link = { link } idx = { idx } />
            ))}
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};

Card.propTypes = {
  card: PropTypes.object,
};

export default Card;
