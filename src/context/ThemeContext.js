import createDataContext from './createDataContext';
import { THEME_DARK, THEME_LIGHT, PAYLOAD_LIGHT } from '../constants/themeConstants';

const INITIAL_STATE = {
  theme: PAYLOAD_LIGHT,
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case THEME_DARK:
      return {
        ...state,
        theme: action.payload,
      };
    case THEME_LIGHT:
      return {
        ...state,
        theme: action.payload,
      };
    default: return state;
  }
}

const changeTheme = (dispatch) => (themeType, themePayload) => {
  dispatch({ type: themeType, payload: themePayload });
};

export const { Context, Provider } = createDataContext(
  themeReducer,
  {
    changeTheme,
  },
  INITIAL_STATE,
);
