import React, { useState } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import routes from "./utils/routes";

// this needs to be updated soon with the right type
export const CurrentNodeContext = React.createContext<any | null>({});

function App() {
  const [connected, setConnected] = useState(false);

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
