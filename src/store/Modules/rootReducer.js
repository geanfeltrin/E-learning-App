import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import videoPlayer from './videoPlayer/reducer';

const reducers = combineReducers({
  auth,
  user,
  videoPlayer,
});

export default reducers;
