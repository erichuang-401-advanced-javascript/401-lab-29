import React from "react";
import Links from './links/links';

const Card = (props) => {

  let card = props.card;

  return (
    <React.Fragment>

      <div className={"card"}>

        <header><h3>{card.title}</h3></header>

        <div className="content">{card.copy}</div>

        <figure>
          <img src={card.media.href} alt={card.media.alt}/>
          <figcaption>{card.media.title}</figcaption>
        </figure>

        <nav className="links">
          <ul>
            {card.links.map( ( link, idx ) => (
              <Links link = { link } idx = { idx } />
            ))}
          </ul>
        </nav>
      </div>

    </React.Fragment>
  );
};

export default Card;
