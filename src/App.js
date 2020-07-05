import React from 'react';
import 'fontsource-roboto';
import Header from './common/header';
import Footer from './common/footer';
import Contact from './contact-view/contact-page';
import MembershipsPage from './membership-view/membership-page';
import Home from './home-view/homepage';
import Products from './product-view/product-route';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="main-body">
          <Switch>
              <Route path="/memberships" component={MembershipsPage}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/products" component={Products}></Route>
              <Route path="/" component={Home}></Route>
          </Switch>
        </div>
        {/* <ProductItem /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
