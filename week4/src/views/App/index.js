import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "../../stores";
import AppContainer from "../../containers/AppContainer";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
