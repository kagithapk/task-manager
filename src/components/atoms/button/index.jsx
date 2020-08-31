import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

/*
  props:
  type: button type (string) [Eg: 'button', 'reset', 'submit'] - optional (default: 'button')
  label: button label (string)
  className: class name for button - optional (default: null)
  handleClick: function to trigger on button click
*/

const Button = ({
  type,
  label,
  className,
  handleClick,
  disabled,
}) => (
  <button
    type={type}
    className={`button-default ${className} ${disabled ? 'button-disabled' : null}`}
    onClick={handleClick}
    disabled={disabled}
  >
    {label}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  className: null,
  disabled: false,
};

export default Button;
