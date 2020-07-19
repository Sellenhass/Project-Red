import { takeEvery, call, put } from "redux-saga/effects";
import { getAsteroidsList } from "./actions";
import api from "../../../api//api";

function* getAsteroidsListSaga({ payload: { date } }) {
  try {
    const data = yield call(api.getAsteroidsList, { date });

    yield put(getAsteroidsList.success(data));
  } catch (error) {}
}

export default function* () {
  yield takeEvery(getAsteroidsList.trigger, getAsteroidsListSaga);
}
