import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Switch , Route } from 'react-router-dom';

import MainWindow from "./components/MainWindow/MainWindow";
import SignIn from "./components/SignIn/SignIn";
import LogIn from "./components/LogIn/LogIn";
import SignUp from "./components/SignUp/SignUp";

const Div = styled.div`
  @media (max-width:425px) {
    height:100vh;
    width :100vw;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  @media (min-width:426px) {
    display:none;
  }
`;

function App() {
  const refDiv = useRef();
  useEffect(() => {
    refDiv.current.scrollTop = refDiv.current.scrollHeight;
  });

  return (
    <Provider store={store}>
      <Router>
        <Div ref={ refDiv } >
          <Switch>

            <Route path='/' exact > <MainWindow /></Route>
            <Route path='/sign-in'> <SignIn />    </Route>
            <Route path='/log-in' > <LogIn />     </Route>
            <Route path='/sign-up'> <SignUp />    </Route>

          </Switch>
        </Div>
      </Router>
    </Provider>
  );
}

export default App;
