import { createStore } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import _ from 'lodash';
import { saveState, loadState } from '../connectivity/localstorage';
import initialStateExams from './exams/initial';
import initialStateTheme from './theme/initial';

const persistedState = loadState() || {
  exams: initialStateExams,
  theme: initialStateTheme,
};

const store = createStore(rootReducer, persistedState, composeWithDevTools());

store.subscribe(
  _.throttle(() => {
    saveState(store.getState());
  })
);

export default store;
