import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import StockForm from './components/StockForm';
import StockTable from './components/StockTable';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ LandingPage } />
      <Route path="/register" component={ StockForm } />
      <Route path="/stock-table" component={ StockTable } />
    </Switch>
  );
}

export default App;
