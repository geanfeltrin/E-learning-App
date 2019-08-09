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
        console.log(action);
        draft.playing = true;
        draft.pause = false;
        break;
      }

      case '@videoPlayer/PAUSE_VIDEO': {
        draft.playing = false;
        draft.pause = true;
        break;
      }
      case '@videoPlayer/CURRENT_TIME_REQUEST': {
        draft.playing = true;
        draft.pause = false;
        break;
      }
      case '@videoPlayer/CURRENT_TIME_SUCCESS': {
        draft.currentTime = action.payload.time;
        break;
      }

      default:
        return state;
    }
  });
}
