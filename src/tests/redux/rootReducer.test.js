import { createStore } from 'redux';
import rootReducer from '../../redux/rootReducer';
import themeReducer from '../../redux/theme/reducer';
import examsReducer from '../../redux/exams/reducer';

describe('test rootReducer', () => {
  it('test theme', () => {
    let store = createStore(rootReducer);
    const result = store.getState().theme;
    expect(result).toEqual(themeReducer(undefined, {}));
  });
  it('test exams', () => {
    let store = createStore(rootReducer);
    const result = store.getState().exams;
    expect(result).toEqual(examsReducer(undefined, {}));
  });
});
