import React from "react";
import MainContainer from "./navigation/MainNavigator";

import { Provider } from "react-redux";
import { store, persistor } from "./stores/store";

function App() {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
}

export default App;
