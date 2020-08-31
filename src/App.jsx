import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import Button from './components/atoms/button';
import useChangeTheme from './hooks/useChangeTheme';
import useTheme from './hooks/useTheme';
import LoginPage from './components/pages/login';

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
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/sign-up" component={LoginPage} />
        </Switch>
      </BrowserRouter>
    </section>
  );
}

export default App;
