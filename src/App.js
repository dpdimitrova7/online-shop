import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import './App.css';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact={true} path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;