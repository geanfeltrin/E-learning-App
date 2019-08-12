export function getCoursesRequest(studentId, companyId) {
  return {
    type: '@courses/GET_COURSES_REQUEST',
    payload: { studentId, companyId },
  };
}

export function getCoursesSuccess(data) {
  return {
    type: '@courses/GET_COURSES_SUCCESS',
    payload: { data },
  };
}
