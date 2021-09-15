import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainWindow from "./components/MainWindow/MainWindow";
import SignIn from "./components/SignIn/SignIn";
import SwitchDevice from "./components/SwitchDevice/SwitchDevice";

const Div = styled.div`
  /* @media (max-width:425px) { */
    height:100vh;
    width :100vw;
    display:flex;
    justify-content:center;
    align-items:center;
  /* } */
  /* @media (min-width:426px) {
    display:none;
  } */
`;

function App() {
  const [ switchDevice, setSwitchDevice ] = useState(false);
  useEffect( () => window.innerWidth > 425 ? setSwitchDevice(true) : setSwitchDevice(false) )
  window.addEventListener( "resize", () => 
    window.innerWidth > 425 ? setSwitchDevice(true) : setSwitchDevice(false) )
  return (
    <Provider store={store}>
      <Router>
        <Div setSwitchDevice={setSwitchDevice} >
          {
            switchDevice ? <SwitchDevice /> :
            <Switch>

              <Route path='/' exact > <MainWindow />      </Route>
              <Route path='/sign-in'> <SignIn />          </Route>

            </Switch>
          }
        </Div>
      </Router>
    </Provider>
  );
}

export default App;
