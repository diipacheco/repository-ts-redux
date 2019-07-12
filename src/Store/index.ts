import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { RepositoriesState } from './Ducks/Repositories/types';
import rootReducer from './Ducks/rootReducer';
import rootSaga from './Ducks/rootSaga';


export interface ApplicationState {
    repositories: RepositoriesState
}

const sagaMiddleware = createSagaMiddleware();


const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
