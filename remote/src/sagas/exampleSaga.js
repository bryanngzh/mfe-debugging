// src/sagas/exampleSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';

// Mock API function
const fetchData = () => new Promise(resolve => setTimeout(() => resolve({ data: 'Some data' }), 1000));

function* fetchDataSaga() {
  try {
    const response = yield call(fetchData);
    yield put({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_DATA_FAILURE', error });
  }
}

function* exampleSaga() {
  yield takeEvery('FETCH_DATA_REQUEST', fetchDataSaga);
}

export default exampleSaga;
