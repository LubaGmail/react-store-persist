// Enhances rootReducer with helper functions
import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
  Boolean
);

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
const composedEnhancers = compose(applyMiddleware(...middleWares));

// with logger middleware
export const store = createStore(rootReducer, undefined, composedEnhancers);
// export const store = createStore(rootReducer);


