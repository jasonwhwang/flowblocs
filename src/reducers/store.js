import { createStore, combineReducers } from 'redux'; // applyMiddleware

// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import common from './common';

const rootReducer = combineReducers({
  common
});

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  // let store = createStore(persistedReducer, middleware);
  let store = createStore(rootReducer);
  // let persistor = persistStore(store);
  // return { store, persistor };
  return { store };
}