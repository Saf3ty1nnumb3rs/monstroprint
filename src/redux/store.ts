/* eslint-disable @typescript-eslint/ban-types */
import {
  createStore,
  applyMiddleware,
  Store,
  Middleware,
  Dispatch,
  AnyAction,
} from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import rootReducer from './root-reducer';

const middlewares: (
  | // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Middleware<{}, any, Dispatch<AnyAction>>
  | ThunkMiddleware<{}, AnyAction, undefined>
)[] = [thunk];

if (process.env.NODE_ENV === 'development') middlewares.push(logger);

export const store: Store = createStore(
  rootReducer,
  applyMiddleware(...middlewares),
);
export const persistor = persistStore(store);
export default { store, persistor };
