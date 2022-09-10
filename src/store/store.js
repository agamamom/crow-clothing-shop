import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';
import { rootReducer } from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

// const middleWares = [
//     process.env.NODE_ENV === 'development' &&
//     sagaMiddleware
// ].filter(Boolean);

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['user'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const composedEnhancers = applyMiddleware(sagaMiddleware);
export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);