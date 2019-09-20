import React from "react";

const Links = (props) => {

  const link = props.link;
  const idx = props.idx;

  return(
    <React.Fragment>

        <li key = { idx }>
          <a className = { link.type } href = { link.href } title = { link.title }>
            { link.title }
          </a>
        </li>

    </React.Fragment>
  );
};

export default Links;
