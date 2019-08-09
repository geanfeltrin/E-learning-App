import { delay, put, call, all, takeLatest } from 'redux-saga/effects';
import VideoPlayer from '~/components/VideoPlayer';

function* interval() {
  while (true) {
    yield delay(3000);

    yield put(MinhaAction());
  }
}

function* playVideo({ payload }) {
  const { playing } = payload;
  console.log('p', playing);
  while (playing) {
    yield delay(3000);
    const response = VideoPlayer;
    console.log(response);
  }
}

export default all([takeLatest('@videoPlayer/PLAY_VIDEO_REQUEST', playVideo)]);
