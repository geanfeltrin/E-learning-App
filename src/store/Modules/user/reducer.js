import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
  loading: true,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.session;
        false;
        break;
      }

      default:
        return state;
    }
  });
}
