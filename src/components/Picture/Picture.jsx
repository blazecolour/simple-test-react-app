import React from 'react';
import PropTypes from 'prop-types';

export default function Picture(props) {
  const { src, alt } = props;
  return <img src={src} alt={alt} width="200" height="200" />;
}

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};
