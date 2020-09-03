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

console.log(persistedState);

const store = createStore(rootReducer, persistedState, composeWithDevTools());

store.subscribe(
  _.throttle(() => {
    console.log(store.getState());
    saveState(store.getState());
  })
);

export default store;
