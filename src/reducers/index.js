import {combineReducers} from 'redux'

import CompaniesReducer from './companies';

const allReducers = combineReducers({
    companies: CompaniesReducer
});
export default allReducers