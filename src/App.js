import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
// import { BrowserRouter as Router, Switch , Route , Link } from 'react-router-dom';

import MainWindow from "./components/MainWindow/MainWindow";

function App() {
  return (
    <Provider store={store}>
      {/* <Router> */}
        <MainWindow />
      {/* </Router> */}
    </Provider>
  );
}

export default App;
