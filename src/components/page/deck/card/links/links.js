import React from 'react';
import PropTypes from 'prop-types';

const Links = (props) => {
  const { link } = props;
  const { idx } = props;

  return (
    <React.Fragment>

        <li key = { idx }>
          <a className = { link.type } href = { link.href } title = { link.title }>
            { link.title }
          </a>
        </li>

    </React.Fragment>
  );
};

Links.propTypes = {
  link: PropTypes.object,
  idx: PropTypes.number,
};

export default Links;
