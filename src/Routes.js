import { Switch, Route, Redirect } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function Routes({ dogs }) {
  return (
    <Switch>
      <Route exact path="/dogs">
        <DogList dogs={dogs} />
      </Route>
      <Route exact path="/dogs/:name">
        <DogDetails dogs={dogs} />
      </Route>
      <Route>
        <Redirect to="/dogs" />
      </Route>
    </Switch>
  );
}

export default Routes;
