import React from 'react';
import PropTypes from 'prop-types';
import './InitialTemplate.scss';
import Form from '../../organisms/form';
import TextP from '../../atoms/textP';

const InitialTemplate = ({
  headingText,
  form,
  tabOptionOneText,
  tabOptionTwoText,
  onTabClick,
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
};

InitialTemplate.defaultProps = {
  headingText: 'Please provide heading text in LoginPage as prop.',
  form: <></>,
  tabOptionOneText: 'Please provide tabOptionOneText in LoginPage as prop',
  tabOptionTwoText: 'Please provide tabOptionTwoText in LoginPage as prop',
};

export default InitialTemplate;
