import React from 'react';
import ProductList from './product-list-page';
import ProductPage from './product-page';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

export default function ProductRoute(props) {
  const match = useRouteMatch();
  return (
    <Router>
      <Switch>
        <Route path={`${match.path}/:id`} component={ProductPage}></Route>
        <Route path={match.path} component={ProductList}></Route>
      </Switch>
    </Router>
  );
}