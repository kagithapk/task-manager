import React from 'react';
import './App.scss';
import useTheme from './hooks/useTheme';
import Routes from './components/routes';

function App() {
  const theme = useTheme();

  return (
    <section className={`app-container app-${theme}`}>
      <Routes />
    </section>
  );
}

export default App;
