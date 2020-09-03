import { TOOGLE_THEME } from '../types';
import initialState from './initial';
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
