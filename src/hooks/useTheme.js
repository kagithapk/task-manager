import { useContext } from 'react';
import { Context as ThemeContext } from '../context/ThemeContext';

export default () => {
  const { state } = useContext(ThemeContext);
  const { theme } = state;

  return theme;
};
