import './App.css';
import Subscription from './components/Subscription/Subscription'
import Payment from './components/Payment/Payment'
import Confirmation from './components/Confirmation/Confirmation'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App" style={{display: 'flex', justifyContent:'center', alignContent: 'center', alignItems: 'center', height:'100vh', width: '100%' }}>
      <Router>
        <Switch>
            <Route exact path="/plan" component={Subscription}/>
            <Route exact path="/confirmation" component={Confirmation}/>
            <Route exact path="/payment" component={Payment}/>
            <Route exact path="/"><Redirect to="/plan"/></Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
