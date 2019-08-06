export function playVideoRequest(videoState) {
  return {
    type: '@videoPlayer/PLAY_VIDEO_REQUEST',
    payload: { videoState },
  };
}

export function playVideoSuccess(videoState) {
  return {
    type: '@videoPlayer/PLAY_VIDEO_REQUEST',
    payload: { videoState },
  };
}

export function currentTimeRequest(time) {
  return {
    type: '@videoPlayer/CURRENT_TIME_REQUEST',
    payload: { time },
  };
}
