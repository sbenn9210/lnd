import React from "react";
import { Route, Switch, withRouter } from "react-router";
import "./App.css";
import Navigation from "./components/Navigation";
import routes from "./utils/routes";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default withRouter(App);
