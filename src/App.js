import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Samsung from './components/Samsung';
import Htc from './components/Htc';
import Google from './components/Google';
import Apple from './components/Apple';
import LoginPage from './components/LoginPage';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/details" component={Details} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/samsung" component={Samsung} />
          <Route exact path="/htc" component={Htc} />
          <Route exact path="/google" component={Google} />
          <Route exact path="/apple" component={Apple} />
          <Route exact path="/login" component={LoginPage} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
