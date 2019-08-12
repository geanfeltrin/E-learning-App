import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import videoPlayer from './videoPlayer/reducer';
import courses from './courses/reducer';

const reducers = combineReducers({
  auth,
  user,
  courses,
  videoPlayer,
});

export default reducers;
