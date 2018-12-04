import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default function Button(props) {
  const { onClick, children } = props;
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};
