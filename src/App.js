import React, { useEffect } from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";

function App({ routes }) {

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    history.push('/');
  }, [history]);

  return (
    <Switch>
      {routes.map((route, i) => (
        <Route {...route} key={i} />
      ))}
    </Switch>
  );
}

export default App;