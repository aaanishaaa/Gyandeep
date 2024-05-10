import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './login';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
};

export default App;
