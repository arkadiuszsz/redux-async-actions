export const ASYNC_ACTION = 'ASYNC_ACTION';

export function createAsyncAction(startAction, asyncFunc) {
  if (typeof startAction === 'function') {
    return {
      type: ASYNC_ACTION,
      asyncFunc: startAction
    };
  }

  return {
    type: ASYNC_ACTION,
    startAction,
    asyncFunc
  };
};
