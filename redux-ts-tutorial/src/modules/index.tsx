import { combineReducers } from 'redux';
import counter from './counter';

const rootReduxer = combineReducers({
  counter,
});

export default rootReduxer;
