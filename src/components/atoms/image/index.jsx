import React from 'react';
import PropTypes from 'prop-types';
import './image.scss';

const Image = ({
  source,
  className,
  alt,
}) => (
  <picture>
    <img src={source} alt={alt} className={className} />
  </picture>
);

Image.propTypes = {
  source: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

Image.defaultProps = {
  className: '',
};

export default Image;
