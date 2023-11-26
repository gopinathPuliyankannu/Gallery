import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./reducers/root.reducers";
import { rootSaga } from "./sagas/root.saga";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

// import Realm from "realm";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["galleryList"],
  blacklist: [],
  // transforms: [
  //   {
  //     // Custom transform to handle Realm data
  //     in: (state) => {
  //       // Convert Realm results to plain objects for redux-persist
  //       const tasks = realmInstance
  //         .objects("Task")
  //         .map((task) => ({ ...task }));
  //       return { ...state, tasks };
  //     },
  //     out: (state) => {
  //       // Save plain objects to Realm
  //       realmInstance.write(() => {
  //         state.tasks.forEach((task) => {
  //           realmInstance.create("Task", task, Realm.UpdateMode.Modified);
  //         });
  //       });
  //     },
  //   },
  // ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

var persistor = persistStore(store);
sagaMiddleware.run(rootSaga);
export { store, persistor };
