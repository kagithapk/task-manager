import React from 'react';
import PropTypes from 'prop-types';
import './InitialTemplate.scss';
import Form from '../../organisms/form';
import TextP from '../../atoms/textP';

/*
  props:
  headingText: App banner heading
  form: form fields JSX
  tabOneOptionText: text of first tab
  tabOptionTwoText: text of second tab
  onTabClick: function to trigger in tab click
  formType: type of form
*/

const InitialTemplate = ({
  headingText,
  form,
  tabOptionOneText,
  tabOptionTwoText,
  onTabClick,
  formType,
}) => (
  <>
    <section className="initial-template-container">
      <section className="banner-text-container">
        <TextP context={headingText} className="banner-text" />
      </section>
      <Form
        tabOptionOneText={tabOptionOneText}
        tabOptionTwoText={tabOptionTwoText}
        onTabClick={onTabClick}
        form={form}
        formType={formType}
      />
    </section>
  </>
);

InitialTemplate.propTypes = {
  headingText: PropTypes.string,
  form: PropTypes.element,
  tabOptionOneText: PropTypes.string,
  tabOptionTwoText: PropTypes.string,
  onTabClick: PropTypes.func.isRequired,
  formType: PropTypes.string,
};

InitialTemplate.defaultProps = {
  headingText: 'Please provide heading text in LoginPage as prop.',
  form: <></>,
  tabOptionOneText: 'Please provide tabOptionOneText in LoginPage as prop',
  tabOptionTwoText: 'Please provide tabOptionTwoText in LoginPage as prop',
  formType: 'login',
};

export default InitialTemplate;
