import React from "react";
import Card from "./card/card";

const Deck = (props) => {

  const deck = props.deck;

  return(
    <React.Fragment>

      <section className="deck">

        <header><h2>{deck.title}</h2></header>

        {deck.records.map((card) => (
            <Card card={card}/>
        ))}

      </section>

    </React.Fragment>
  )

};

export default Deck;
