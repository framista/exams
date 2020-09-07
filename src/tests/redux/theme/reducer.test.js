import initialState from '../../../redux/theme/initial';
import reducer from '../../../redux/theme/reducer';
import { TOOGLE_THEME } from '../../../redux/types';

describe('test theme reducer', () => {
  it('should setup default theme values', () => {
    const state = reducer(undefined, { type: '@@INIT' });
    expect(state).toEqual(initialState);
  });
  it('should set background to dark', () => {
    const state = reducer(undefined, { type: TOOGLE_THEME });
    expect(state.background).toBe('dark');
  });
});
