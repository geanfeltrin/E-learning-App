import produce from 'immer';

const INITIAL_STATE = {
  data: null,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@courses/GET_COURSES_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@courses/GET_COURSES_SUCCESS': {
        draft.data = action.payload.data;
        draft.loading = false;
        break;
      }

      default:
        return state;
    }
  });
}
