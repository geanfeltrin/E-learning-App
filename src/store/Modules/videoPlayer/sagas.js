import { deplay, put } from 'redux-saga/effects';

function* interval() {
  while (true) {
    yield delay(3000);

    yield put(MinhaAction());
  }
}
