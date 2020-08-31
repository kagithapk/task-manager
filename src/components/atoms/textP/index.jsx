import React from 'react';
import PropTypes from 'prop-types';
import './TextP.scss';
import useTheme from '../../../hooks/useTheme';

/*
  props:
  className: class for text
  context: context to show
*/

const TextP = ({
  className,
  context,
}) => {
  const theme = useTheme();

  return (
    <p className={`text-p-${theme} ${className}`}>{context}</p>
  );
};

TextP.propTypes = {
  className: PropTypes.string,
  context: PropTypes.string.isRequired,
};

TextP.defaultProps = {
  className: '',
};

export default TextP;
