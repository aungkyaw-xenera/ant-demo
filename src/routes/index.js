import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";
import Question2Page from "../pages/Question2Page";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/question2" component={Question2Page} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;
