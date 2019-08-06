import produce from 'immer';

const INITIAL_STATE = {
  playing: false,
  pause: true,
  currentTime: '',
};

export default function videoPlayer(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@videoPlayer/PLAY_VIDEO_REQUEST': {
        draft.playing = false;
        draft.pause = true;
        break;
      }

      case '@videoPlayer/PLAY_VIDEO_SUCCESS': {
        draft.playing = true;
        draft.pause = false;
        break;
      }
      case '@videoPlayer/CURRENT_TIME_REQUEST': {
        draft.currentTime = action.payload.time;
      }

      default:
        return state;
    }
  });
}
