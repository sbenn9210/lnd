import React, { useState } from "react";
import { Route, useHistory, Switch, withRouter } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import routes from "./utils/routes";
import * as api from "./lib/api";

export const CurrentNodeContext = React.createContext({});

function App() {
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();

  const connectToLnd = async (host: string, cert: string, macaroon: string) => {
    setError("");
    try {
      await api.connect(host, cert, macaroon);
      setConnected(true);
      history.push("/");
    } catch (err: any) {
      setError(err.message);
    }
  };

  const disconnect = () => {
    api.clearToken();
    setConnected(false);
  };
  return (
    <div className="App">
      <CurrentNodeContext.Provider value={[connected, setConnected]}>
        <Navigation />
        <Switch>
          {routes.map((route, index) => {
            return (
              route.protected === false && (
                <Route
                  exact
                  key={index}
                  path={route.path}
                  component={route.component}
                />
              )
            );
          })}
        </Switch>
      </CurrentNodeContext.Provider>
    </div>
  );
}

export default withRouter(App);
