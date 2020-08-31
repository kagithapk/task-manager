import React from 'react';
import './InitialTemplate.scss';
import Form from '../../organisms/form';
import TextP from '../../atoms/textP';

const InitialTemplate = () => (
  <>
    <section className="initial-template-container">
      <section className="banner-text-container">
        <TextP context="Kagitha's Task App" className="banner-text" />
      </section>
      <Form />
    </section>
  </>
);

export default InitialTemplate;
