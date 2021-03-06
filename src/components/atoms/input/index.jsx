import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';
import useTheme from '../../../hooks/useTheme';

/*
  props:
  autocomplete: Boolean to show suggestions
  autofocus: Boolean to focus on load
  checked: Boolean for checked value on checkbox
  disabled: Boolean for input disable
  id: Input id
  max: max date
  maxLength: maximum length input can have
  min: min date
  minLength: minimum length input can have
  name: Name of input
  pattern: pattern to check the input value
  readonly: Boolean to make input read only
  required: Boolean to make mandatory input field
  type: type of input
  value: value of input
  className: class name for input
  handleChange: function to trigger on input change
*/

const Input = ({
  autocomplete,
  checked,
  disabled,
  id,
  max,
  maxLength,
  min,
  minLength,
  name,
  pattern,
  readonly,
  required,
  title,
  type,
  value,
  className,
  handleChange,
}) => {
  const theme = useTheme();
  const handleInputChange = (event) => {
    handleChange(event.target.value);
  };

  return (
    <section className="input-container">
      <label htmlFor={id} className={`input-label label-${theme} ${value ? `shrink  shrink-${theme}` : ''}`}>{name}</label>
      <input
        autoComplete={autocomplete}
        checked={checked}
        disabled={disabled}
        id={id}
        max={max}
        maxLength={maxLength}
        min={min}
        minLength={minLength}
        name={name}
        pattern={pattern}
        readOnly={readonly}
        required={required}
        title={title}
        type={type}
        value={value}
        className={`input-default input-${theme} ${className}`}
        onChange={handleInputChange}
      />
      <div className={`border-line border-line-${theme} ${value ? 'stay-line' : ''}`} />
    </section>
  );
};

Input.propTypes = {
  autocomplete: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  max: PropTypes.number,
  maxLength: PropTypes.number,
  min: PropTypes.number,
  minLength: PropTypes.number,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  readonly: PropTypes.bool,
  required: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  autocomplete: 'off',
  checked: false,
  disabled: false,
  max: 1000,
  maxLength: 1000,
  min: 0,
  minLength: 0,
  // eslint-disable-next-line no-useless-escape
  pattern: '[\s\S]*',
  readonly: false,
  required: false,
  title: 'Enter the formatted request.',
  className: null,
};

export default Input;
