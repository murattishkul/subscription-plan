import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Subscription from './components/Subscription/Subscription'
import Payment from './components/Payment/Payment'
import Confirmation from './components/Confirmation/Confirmation'
import './App.css';

export const AppContext = React.createContext();
const BASE_URL = 'https://cloud-storage-prices-moberries.herokuapp.com/prices';

function App() {
  const [prices,setPrices] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [upfront, setUpfront] = useState(false);
  const [months, setMonths] = useState(12)
  const [GB, setGB] = useState(5);

  useEffect(()=>{
    fetch(BASE_URL)
      .then( res => res.json())
      .then( data => setPrices(data?.subscription_plans))
  }, []);

  useEffect(()=>{
    if(prices){
      let cost = prices.find(i => i.duration_months===months)?.price_usd_per_gb;
      setTotalPrice(cost * GB * months * ((upfront === true) ? 0.9 : 1));
    }
  }, [upfront, GB, months, prices])

  console.log(totalPrice)

  return (
    <AppContext.Provider value={{
      prices,
      GB,
      upfront,
      months,
      totalPrice,
      setPrices,
      setGB,
      setUpfront,
      setMonths,
      setTotalPrice
    }}>
      <div className="App" style={{display: 'flex', justifyContent:'center', alignContent: 'center', alignItems: 'center', height:'100vh', width: '100%' }}>
        <Router>
          <Switch>
              <Route exact path="/plan" component={Subscription }/>
              <Route exact path="/confirmation" component={Confirmation}/>
              <Route exact path="/payment" component={Payment}/>
              <Route exact path="/"><Redirect to="/plan"/></Route>
          </Switch>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
