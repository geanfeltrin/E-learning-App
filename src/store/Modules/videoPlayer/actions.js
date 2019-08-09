export function playVideoRequest(videoState, playing = true) {
  return {
    type: '@videoPlayer/PLAY_VIDEO_REQUEST',
    payload: { videoState, playing },
  };
}

export function pauseVideo(videoState) {
  return {
    type: '@videoPlayer/PAUSE_VIDEO',
    payload: { videoState },
  };
}

export function currentTimeRequest(time) {
  return {
    type: '@videoPlayer/CURRENT_TIME_REQUEST',
    payload: { time },
  };
}

export function currentTimeSuccess(time) {
  return {
    type: '@videoPlayer/CURRENT_TIME_REQUEST',
    payload: { time },
  };
}
