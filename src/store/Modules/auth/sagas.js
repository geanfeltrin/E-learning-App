import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { username, password } = payload;
    const params = new URLSearchParams();
    params.append('username', `${username}`);
    params.append('password', `${password}`);

    const response = yield call(api.post, '/ava/student/login', params);

    yield put(signInSuccess(response.data.content));
  } catch (error) {
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
