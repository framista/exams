import { combineReducers } from 'redux';
import themeReducer from './theme/reducer';
import examsReducer from './exams/reducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  exams: examsReducer,
});

export default rootReducer;
