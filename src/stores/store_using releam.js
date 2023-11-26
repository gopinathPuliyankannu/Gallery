import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./reducers/root.reducers";
import { rootSaga } from "./sagas/root.saga";
import { persistStore, persistReducer } from "redux-persist";
import Realm from "realm";

// Define your Realm schema
const DataSchema = {
  name: "Data",
  properties: {
    id: "int",
    name: "string",
    // Define other properties
  },
};

// Create a custom storage engine for Redux Persist using Realm
const realm = new Realm({ schema: [DataSchema] });

const realmStorage = {
  getItem: (key, callback) => {
    const item = realm.objects("Data").filtered(`id = ${key}`)[0];
    callback(null, item ? JSON.stringify(item) : null);
  },
  setItem: (key, value, callback) => {
    realm.write(() => {
      const data = JSON.parse(value);
      realm.create("Data", data, true);
    });
    callback(null);
  },
  removeItem: (key, callback) => {
    realm.write(() => {
      const item = realm.objects("Data").filtered(`id = ${key}`)[0];
      realm.delete(item);
    });
    callback(null);
  },
};

export const persistConfig = {
  key: "root",
  storage: realmStorage,
  // whitelist: ["galleryList"],
  // blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

let persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
export { store, persistor };
