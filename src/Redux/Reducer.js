import { combineReducers } from 'redux';
import scenariesReducer from './ScenariesSlice';

const rootReducer = combineReducers({
  scenaries: scenariesReducer,
});

export default rootReducer;
