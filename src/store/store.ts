import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './root-saga';
import { rootReducer } from './root-reducer';

export type RootState = ReturnType<typeof rootReducer>

const sagaMiddleware = createSagaMiddleware();

// const middleWares = [
//     process.env.NODE_ENV === 'development' &&
//     sagaMiddleware
// ].filter(Boolean);

type ExtendedPersistConfig = PersistConfig<RootState> & {
    whitelist: (keyof RootState)[]
}

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const composedEnhancers = applyMiddleware(sagaMiddleware);
export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);