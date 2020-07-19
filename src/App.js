import React from 'react';
import 'fontsource-roboto';
import Header from './modules/common/header';
import Footer from './modules/common/footer';
import modules from './modules';
// import Contact from './contact-view/contact-page';
// import MembershipsPage from './membership-view/membership-page';
// import Home from './home-view/homepage';
// import Products from './product-view/product-route';
import Login from './modules/common/login';
import Register from './modules/common/register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
              {/* <Route path="/memberships" component={MembershipsPage}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/products" component={Products}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/register" component={Register}></Route>
              <Route path="/" component={Home}></Route> */}
              {modules.map(module => (
                <Route {...module.routeProps} key={module.name} />
              ))}              
              <Route path="/login" component={Login}></Route>
              <Route path="/register" component={Register}></Route>
          </Switch>
        </div>
        {/* <ProductItem /> */}
        <Footer />
        <ToastContainer 
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={true}/>
      </Router>
    </div>
  );
}

export default App;
