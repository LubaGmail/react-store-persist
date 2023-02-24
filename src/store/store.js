// Enhances rootReducer with helper functions
import { compose, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(
  Boolean
);

const composeEnhancer =   (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
    
  const persistConfig = {
    key: 'root',
    storage,
    blacklist: [],
  };
  
const persistedReducer = persistReducer(persistConfig, rootReducer);


// const loggedMiddleware = (state) => (next) => (action) => {
//   if (!action.type) {
//     return next(action)
//   }
//   console.log('type: ', action.type)
//   console.log('payload: ', action.payload)
//   console.log('currentState: ', store.getState())

//   next(action)

//   console.log('next state: ', store.getState())
// }

// const middleWares = [loggedMiddleware]

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

// with logger middleware
export const store = createStore (
  persistedReducer,
  undefined,
  composedEnhancers);

export const persistor = persistStore(store);

// export const store = createStore(rootReducer);


