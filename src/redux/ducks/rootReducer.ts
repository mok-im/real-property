import houseReducer from './houseReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    property: houseReducer,
});

export default rootReducer;
