import { combineReducers } from 'redux';

import auth from './auth';
import users from './users'

export const reducers = combineReducers({ auth,users });