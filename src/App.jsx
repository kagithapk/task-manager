import React from 'react';
import './App.scss';
import Button from './components/atoms/button';
import useChangeTheme from './hooks/useChangeTheme';
import useTheme from './hooks/useTheme';
import InitialTemplate from './components/templates/initialTemplate';

function App() {
  const theme = useTheme();

  return (
    <section className={`app-container app-${theme}`}>
      <section className="theme-container">
        <Button
          type="button"
          label="Change Theme"
          className="button-primary"
          handleClick={useChangeTheme()}
        />
      </section>
      <InitialTemplate />
    </section>
  );
}

export default App;