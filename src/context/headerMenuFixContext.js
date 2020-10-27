import createDataContext from './createDataContext';

const INITIAL_STATE = {
  isHeaderMenuOpen: false,
};

const headerMenuReducer = (state, action) => {
  switch (action.type) {
    case 'menu_open':
      return {
        ...state,
        isHeaderMenuOpen: true,
      };
    case 'menu_close':
      return {
        ...state,
        isHeaderMenuOpen: false,
      };
    default: return state;
  }
};

const updateMenuStatus = (dispatch) => (status) => {
  dispatch({ type: status });
};

export const { Context, Provider } = createDataContext(
  headerMenuReducer,
  {
    updateMenuStatus,
  },
  INITIAL_STATE,
);
