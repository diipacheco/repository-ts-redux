import { all, takeLatest } from 'redux-saga/effects';

import { RepositoriesTypes } from './Repositories/types';
import { load } from './Repositories/sagas';

export default function* rootSaga() {
    return yield all([
        takeLatest(RepositoriesTypes.LOAD_REQUEST, load),
    ]);
}
