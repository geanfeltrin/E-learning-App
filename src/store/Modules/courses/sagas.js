import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '~/services/api';

import { getCoursesSuccess } from './actions';

export function* getCourses({ payload }) {
  try {
    const { personId } = payload;
    const response = yield call(
      api.get,
      `/ava/student/dashboard?personId=${personId}`
    );
    yield put(getCoursesSuccess(response.data.content));
  } catch (error) {
    throw error;
  }
}

export default all([takeLatest('@courses/GET_COURSES_REQUEST', getCourses)]);
