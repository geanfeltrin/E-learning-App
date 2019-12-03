export function getCoursesRequest(personId) {
  return {
    type: '@courses/GET_COURSES_REQUEST',
    payload: { personId },
  };
}

export function getCoursesSuccess(data) {
  return {
    type: '@courses/GET_COURSES_SUCCESS',
    payload: { data },
  };
}
