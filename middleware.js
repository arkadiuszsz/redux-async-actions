import { ASYNC_ACTION } from './async-actions.js';

const middleware = store => next => action => {
  if (action.type !== ASYNC_ACTION) {
    return next(action);
  }
  if (action.startAction) {
    next(action.startAction);
  }
  return action.asyncFunc(store.dispatch, store.getState);
};

export default middleware;
