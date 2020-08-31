import { TOOGLE_THEME } from '../types';

const initialState = {
  background: 'primary',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_THEME:
      const background = state.background === 'primary' ? 'dark' : 'primary';
      return {
        ...state,
        background,
      };
    default:
      return state;
  }
};

export default reducer;
