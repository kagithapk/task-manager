import React from 'react';
import PropTypes from 'prop-types';
import './Form.scss';
import LoginForm from '../../molecules/loginForm';
import TextP from '../../atoms/textP';

const Form = ({
  tabOptionOneText,
  tabOptionTwoText,
  onTabClick,
  form,
}) => (
  <>
    <section className="form-types-container">
      <section className="form-type-heading-container">
        <section
          role="button"
          className="login-heading"
          onKeyDown={() => onTabClick('login')}
          onClick={() => onTabClick('login')}
          tabIndex={0}
        >
          <TextP context={tabOptionOneText} className="text-p-black" />
        </section>
        <section
          role="button"
          className="sign-up-heading"
          onKeyDown={() => onTabClick('signUp')}
          onClick={() => onTabClick('signUp')}
          tabIndex={-1}
        >
          <TextP context={tabOptionTwoText} className="text-p-black" />
        </section>
      </section>
      <LoginForm>
        {form}
      </LoginForm>
    </section>
  </>
);

Form.propTypes = {
  tabOptionOneText: PropTypes.string,
  tabOptionTwoText: PropTypes.string,
  onTabClick: PropTypes.func.isRequired,
  form: PropTypes.element,
};

Form.defaultProps = {
  tabOptionOneText: 'Please provide tabOptionOneText text in loginPage as prop.',
  tabOptionTwoText: 'Please provide tabOptionTwoText text in loginPage as prop.',
  form: <></>,
};

export default Form;
