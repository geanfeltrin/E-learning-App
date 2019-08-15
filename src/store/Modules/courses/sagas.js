import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '~/services/api';

import { getCoursesSuccess } from './actions';

export function* getCourses({ payload }) {
  try {
    const { studentId, companyId } = payload;
    const response = yield call(
      api.get,
      `https://dev.sistemaresidencia.com.br/sre/apiN/v1/ava/student/courses?studentId=${studentId}&companyId=${companyId}`
    );
    yield put(getCoursesSuccess(response.data.content));
  } catch (error) {
    throw error;
  }
}

export default all([takeLatest('@courses/GET_COURSES_REQUEST', getCourses)]);
