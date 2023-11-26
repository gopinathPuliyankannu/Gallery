import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import MainContainer from "./navigation/MainNavigator";

import { Provider } from "react-redux";
import { store, persistor } from "./stores/store";

function App() {
  return (
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <MainContainer />
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
